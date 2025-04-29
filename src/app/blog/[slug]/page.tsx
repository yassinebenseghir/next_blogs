import { notFound } from 'next/navigation';
import { blogs } from '../../../lib/blog';

type BlogParams = {
  params: {
    slug: string;
  };
};

export default function BlogDetail({ params }: BlogParams) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return notFound(); // affiche une page 404 si l'article n'existe pas
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 text-sm mb-6">Publié le {blog.date}</p>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <div className="prose prose-lg">
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
