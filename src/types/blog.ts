export type BlogPost = {
  title: string;
  slug: { current: string };
  category: { title: string };
  mainImage: { asset: { url: string } };
  publishedAt: string;
  author: { name: string };
}; 