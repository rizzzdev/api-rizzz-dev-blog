import { LikeTypeExtends } from "./starType";
import { PostTypeExtends } from "./postType";
import { UserTypeExtend } from "./userType";

export interface RequestCommentType {
  userId: string;
  postId: string;
  commentText: string;
}

export interface CommentType extends RequestCommentType {
  readonly id?: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface CommentTypeExtends extends CommentType {
  likes?: LikeTypeExtends[];
  user?: UserTypeExtend;
  post?: PostTypeExtends;
}
