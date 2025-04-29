import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon blog</h1>
      <p className="text-lg mb-6">
        Découvrez des articles sur Next.js, le développement web et plus encore.
      </p>
      <Link
        href="/blog"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Lire les articles
      </Link>
    </main>
  );
}
