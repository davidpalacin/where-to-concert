export interface Comment {
  content: string;
  user: number;
  likes: Record<string, any>[]
  className: string
}
