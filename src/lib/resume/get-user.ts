'use server'
import { notFound } from 'next/navigation';

export async function getUser(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${slug}`)

  if (!res.ok) {
    // throw new Error('Failed to fetch data')
    notFound();
  }

  return res.json()
}
