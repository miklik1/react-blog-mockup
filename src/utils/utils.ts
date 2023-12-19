import type BlogPost from "../types/BlogPost";

export function findPostById(posts: BlogPost[], postId: number): BlogPost | undefined {
  return posts.find((post) => post.id === postId);
}
