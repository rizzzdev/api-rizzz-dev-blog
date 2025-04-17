export interface StarType {
  readonly id?: string;
  userId: string;
  postId: string;
  star: number;
  createdAt: Date;
}

export interface RequestStarType {
  userId: string;
  postId: string;
  star: number;
}
