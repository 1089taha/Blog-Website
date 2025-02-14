import { client } from "@/sanity/lib/client";
import BlogPageClient from './components/BlogPageClient';

type BlogPost = {
  title: string;
  slug: { current: string };
  category: { title: string };
  mainImage: { asset: { url: string } };
  publishedAt: string;
  author: { name: string };
};

// Revalidate every 60 seconds
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

  const posts = await client.fetch(query);
  return <BlogPageClient posts={posts} />;
}
