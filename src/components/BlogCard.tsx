// src/components/BlogCard.tsx
import React from 'react'
import Link from 'next/link'

type BlogCardProps = {
  blog: {
    id: number
    title: string
    description: string
    image_url: string
    slug: string
    created_at: string
  }
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md">
      <img src={blog.image_url} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-600">{blog.description}</p>
        <Link href={`/blog/${blog.slug}`}>
          <span className="text-blue-500 hover:underline mt-2 block">Read more</span>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
