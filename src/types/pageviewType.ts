import { PostTypeExtends } from "./postType";
import { UserTypeExtend } from "./userType";

export interface RequestPageviewType {
  userId: string;
  postId?: string;
}

export interface PageviewType extends RequestPageviewType {
  readonly id?: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface PageviewTypeExtends extends PageviewType {
  user?: UserTypeExtend;
  post?: PostTypeExtends;
}
