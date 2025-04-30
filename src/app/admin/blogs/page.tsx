'use client';

import { useState } from 'react';
import { createBlog } from '../../../lib/blog';

export default function AdminBlogsPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImage_url] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBlog = {
      title,
      description,
      image_url,
      slug,
      content,
      date: new Date().toISOString().split('T')[0],
    };

    const result = await createBlog(newBlog);

    if (result?.error) {
      alert('Failed to create blog');
    } else {
      alert('Blog created!');
      // Optionally, clear form
      setTitle('');
      setDescription('');
      setImage_url('');
      setSlug('');
      setContent('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Créer un nouveau blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Description courte"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Slug (ex: mon-premier-blog)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Contenu complet du blog"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows={6}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Créer le blog
        </button>
      </form>
    </div>
  );
}
