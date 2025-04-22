import { CommentTypeExtends } from "./commentType";
import { LikeTypeExtends } from "./likeType";
import { PageviewTypeExtends } from "./pageviewType";

export interface RequestUserType {
  fullName: string;
}

export interface UserType extends RequestUserType {
  readonly id?: string;
  registeredAt: Date;
  deletedAt?: Date;
}

export interface UserTypeExtend extends UserType {
  comments?: CommentTypeExtends[];
  likes?: LikeTypeExtends[];
  pageviews?: PageviewTypeExtends[];
}
