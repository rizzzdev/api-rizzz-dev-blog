import { CommentTypeExtends } from "./commentType";
import { PostTypeExtends } from "./postType";
import { UserTypeExtend } from "./userType";

export interface RequestStarType {
  userId: string;
  postId?: string;
  commentId?: string;
}

export interface StarType extends RequestStarType {
  readonly id?: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface StarTypeExtends extends StarType {
  post?: PostTypeExtends;
  user?: UserTypeExtend;
  comment?: CommentTypeExtends;
}
