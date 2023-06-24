export interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  artist: string;
  genre: string;
  willGo: number;
  comments: { content: string; user: number }[];
}
