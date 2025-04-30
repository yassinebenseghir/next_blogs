// src/lib/blogs.ts
import { supabase } from './supabaseClient'

export async function fetchBlogs() {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching blogs:', error)
    return []
  }

  return data
}

export async function createBlog(data: {
  title: string;
  description: string;
  image_url: string;
  slug: string;
  content: string;
  date: string;
}) {
  const { error } = await supabase.from('blogs').insert([data]);
  return { error };
}
