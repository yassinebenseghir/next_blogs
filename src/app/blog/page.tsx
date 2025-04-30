// src/app/blog/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { fetchBlogs } from '../../lib/blog';
import BlogCard from '../../components/BlogCard';

type Blog = {
  id: number
  title: string
  description: string
  image_url: string
  slug: string
  content: string
  created_at: string
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await fetchBlogs()
      setBlogs(data)
    }

    loadBlogs()
  }, [])

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogPage
