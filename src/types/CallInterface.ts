export interface Call {
  id: string;
  category: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: {
    username: string;
    imageUrl?: string;
  };
}
