'use server'
export async function getUserRepositories(username: string, query: string, currentPage: number, perPage: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${username}/repos?page=${currentPage}&per_page=${perPage}&sort=${query}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}