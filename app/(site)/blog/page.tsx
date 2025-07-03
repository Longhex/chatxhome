"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  cover: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blog"));
        const blogData: Blog[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (id: string) => {
    router.push(`/blog-details?id=${id}`);
  };

  return (
    <div className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg p-6 shadow-lg cursor-pointer"
              onClick={() => handleBlogClick(blog.id)}
            >
              <img
                src={blog.cover}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;