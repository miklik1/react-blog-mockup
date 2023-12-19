export default interface BlogPost {
  id: number;
  title: string;
  author: string;
  likes: number;
  comments: string[];
  content: string;
  publishedAt: Date;
}
