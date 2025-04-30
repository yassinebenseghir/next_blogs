import { notFound } from 'next/navigation';
import { fetchBlogs } from '../../../lib/blog';

type BlogParams = {
  params: {
    slug: string;
  };
};

export default async function BlogDetail({ params }: BlogParams) {
  const blogs = await fetchBlogs();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 text-sm mb-6">Publié le {new Date(blog.created_at).toLocaleDateString()}</p>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <div className="prose prose-lg">
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
