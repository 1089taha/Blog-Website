import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface Category {
  title: string;
}

export const revalidate = 60;

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage {
      asset->{
        url
      }
    },
    body,
    categories[]->{
      title
    },
    publishedAt,
    author->{
      name,
      image {
        asset->{
          url
        }
      },
      bio
    }
  }`;

  const post = await client.fetch(query, { slug: params.slug });

  if (!post) {
    return <div className="text-center text-gray-500">Post not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 lg:px-0 py-10">
      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">{post.title}</h1>
      
      {/* Author Info */}
      <div className="flex justify-center items-center gap-4 text-gray-600 mb-6">
        {post.author.image?.asset?.url && (
          <Image
            src={post.author.image.asset.url}
            alt={post.author.name}
            className="w-12 h-12 rounded-full border"
            width={48}
            height={48}
          />
        )}
        <div className="text-center">
          <p className="font-medium">By {post.author.name}</p>
          <p className="text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
      </div>
      
      {/* Main Image */}
      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full rounded-lg mb-6"
          width={1000}
          height={1000}
        />
      )}
      
      {/* Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-800">
        <PortableText value={post.body} />
      </div>
      
      {/* Categories */}
      {post.categories && post.categories.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {post.categories.map((category: Category, index: number) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full">
              {category.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
