"use client";
import { useState, useEffect } from "react";
import Link from "next/link";


type BlogPost = {
  title: string;
  slug: { current: string };
  category: { title: string };
  mainImage: { asset: { url: string } };
  publishedAt: string;
  author: { name: string };
};

export default function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(3);

  // Get the first post as the banner post
  const bannerPost = posts[0];
  // Remove the banner post from the posts array for pagination
  const remainingPosts = posts.slice(1);

  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (window.innerWidth <= 768) {
        setBlogsPerPage(1);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 824) {
        setBlogsPerPage(2);
      } else {
        setBlogsPerPage(3);
      }
    };

    updateBlogsPerPage();
    window.addEventListener("resize", updateBlogsPerPage);
    return () => window.removeEventListener("resize", updateBlogsPerPage);
  }, []);

  const totalPages = Math.ceil(remainingPosts.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentPosts = remainingPosts.slice(startIndex, startIndex + blogsPerPage);

  return (
    <>
   

      <div className="h-auto w-full flex flex-col items-center justify-center gap-1 md:gap-4 mb-5">
          <p className="font-semibold">Infinite Threads</p>
          <h1 className="text-2xl md:text-[50px] font-bold">Writing from our team</h1>
          <p className="text-center">Unraveling the Boundless Tapestry of Stories, Knowledge, and Perspectives.</p>
        </div>

      <div className="px-3 md:px-10">
        {/* Banner Blog Post */}
        <h1 className="text-3xl font-bold mb-6">Most Popular Blog</h1>
        {bannerPost && (
          <Link href={`/blog/${bannerPost.slug.current}`} className="block relative group">
            <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden shadow-lg mb-8">
              <img
                src={bannerPost.mainImage?.asset?.url}
                alt={bannerPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                <p className="text-sm font-medium mb-1">{bannerPost.category?.title || "Literature & Reading"}</p>
                <h1 className="text-lg md:text-xl font-semibold leading-tight">{bannerPost.title}</h1>
                <p className="text-xs md:text-sm mt-1">
                   By {bannerPost.author?.name} • {new Date(bannerPost.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" })}
                </p>
              </div>
            </div>
          </Link>
        )}

        {/* Your existing sections */}
        

        <h1 className="text-3xl font-bold mb-6">Recent Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <Link key={post.slug.current} href={`/blog/${post.slug.current}`} className="block group">
              <div className="w-full rounded-lg overflow-hidden shadow-lg mb-3">
                <img
                  src={post.mainImage?.asset?.url}
                  alt={post.title}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-gray-600 text-sm mb-1">
                {post.author?.name} • {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" })}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-sm font-semibold bg-gray-200 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
          >
            Previous
          </button>
          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-sm font-semibold bg-gray-200 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
          >
            Next
          </button>
        </div>
      </div>
     
    </>
  );
} 