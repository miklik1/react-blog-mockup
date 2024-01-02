interface TComment {
  id: number;
  author: string;
  text: string;
  replies?: TComment[];
}

interface TBlogPost {
  id: number;
  title: string;
  author: string;
  likes: number;
  comments: TComment[];
  content: string;
  publishedAt: string;
}

export type { TComment, TBlogPost };
