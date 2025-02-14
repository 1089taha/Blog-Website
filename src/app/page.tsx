import { client } from "@/sanity/lib/client";
import BlogPageClient from './components/BlogPageClient';
import type { BlogPost } from '@/types/blog';

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

  const posts = await client.fetch<BlogPost[]>(query);
  return <BlogPageClient posts={posts} />;
}
