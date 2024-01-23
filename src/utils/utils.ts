import type { TBlogPost } from "../types/BlogPost";


export function findPostById(
  posts: TBlogPost[],
  postId: number
): TBlogPost | undefined {
  return posts.find((post) => post.id === postId);
}

export function formatDate(date: string): string | null {
  // Převod řetězce na objekt datumu pro formátování
  const publishedDate = new Date(date);

  if (!publishedDate) return null;

  // Formátování data pro zobrazení
  const formattedDate = publishedDate.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}

export function getRandomImage(): string {
  const randomNumber = Math.floor(Math.random() * 63) + 1;

  const generatedPath = `url('/assets/bg-placeholders/bg (${randomNumber}).jpg')`;

  return generatedPath;
}