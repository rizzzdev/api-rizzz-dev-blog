export interface LikeType {
  readonly id?: string;
  userId: string;
  postId?: string;
  commentId?: string;
  createdAt: Date;
}

export interface RequestLikeType {
  userId: string;
  postId?: string;
  commentId?: string;
}
