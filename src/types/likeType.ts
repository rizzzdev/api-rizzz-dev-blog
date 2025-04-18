import { CommentTypeExtends } from "./commentType";
import { PostTypeExtends } from "./postType";
import { UserTypeExtend } from "./userType";

export interface RequestLikeType {
  userId: string;
  postId?: string;
  commentId?: string;
}

export interface LikeType extends RequestLikeType {
  readonly id?: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface LikeTypeExtends extends LikeType {
  post?: PostTypeExtends;
  user?: UserTypeExtend;
  comment?: CommentTypeExtends;
}
