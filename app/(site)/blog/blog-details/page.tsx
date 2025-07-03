'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';
import { useSearchParams } from 'next/navigation';

interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  cover: string;
}

// Component con để dùng useSearchParams
const BlogContent = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        if (id) {
          const docRef = doc(db, 'blog', id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const blogData = docSnap.data() as Blog;
            setBlog(blogData);
          } else {
            console.error('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-4xl px-4 md:px-8 xl:px-0">
        <img
          src={blog.cover}
          alt={blog.title}
          className="w-full h-60 object-cover rounded-md mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{blog.description}</p>
        <div className="prose max-w-none">{blog.content}</div>
      </div>
    </div>
  );
};

const BlogDetailsPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg font-medium text-gray-600">Loading...</p>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  );
};

export default BlogDetailsPage;
