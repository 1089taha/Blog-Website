import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";



export const revalidate = 60; 


export default async function Home() {  
  const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    category->{title},
    mainImage {
      asset->{url}
    },
    publishedAt,
    author->{name}
  }`;


  const posts = await client.fetch(query, {}, {
    next: {
      revalidate: 60 // Alternative way to set revalidation
    }
  });


  type BlogPost = {
    title: string;
    slug: { current: string };
    category: { title: string };
    mainImage: { asset: { url: string } };
    publishedAt: string;
    author: { name: string };
  };


  
  const AllBlogPosts = posts.length > 1 ? posts.slice(1) : [];


  return (
    <>

      <div className="px-3 md:px-10">
        {/* All Blog Posts */}
        <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AllBlogPosts.map((post: BlogPost) => (
            <Link key={post.slug.current} href={`/blog/${post.slug.current}`} className="block group">
              <div className="w-full rounded-lg overflow-hidden shadow-lg mb-3 relative h-[300px]">
                <Image
                  src={post.mainImage?.asset?.url}
                  alt={post.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="text-gray-600 text-sm mb-1">
                {post.author?.name} • {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>

    </>
  );
}



