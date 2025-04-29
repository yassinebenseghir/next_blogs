import Link from 'next/link';

type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
        <p className="text-xs text-gray-400 mb-4">Publié le {blog.date}</p>
        
        <Link 
          href={`/blog/${blog.slug}`} 
          className="inline-block text-blue-600 hover:underline text-sm font-medium"
        >
          Lire la suite →
        </Link>
      </div>
    </div>
  );
}
