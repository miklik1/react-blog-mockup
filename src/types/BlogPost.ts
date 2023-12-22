interface Comment {
  id: number;
  author: string;
  text: string;
}
interface BlogPost {
  id: number;
  title: string;
  author: string;
  likes: number;
  comments: Comment[];
  content: string;
  publishedAt: string;
}

export type { Comment, BlogPost };
