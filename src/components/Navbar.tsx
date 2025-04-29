import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Mon Blog
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-turquoise">
            Accueil
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-turquoise">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
