import { LikeType } from "./likeType";

export interface CommentType {
  readonly id?: string;
  userId: string;
  postId: string;
  commentText: string;
  likes: LikeType[];
  createdAt: Date;
}
