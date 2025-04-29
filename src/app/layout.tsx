import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Blog App',
  description: 'Blog built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
