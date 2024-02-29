'use server'
export async function getUserLanguage(username: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${username}/repos`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}