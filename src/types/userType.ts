import { CommentTypeExtends } from "./commentType";
import { LikeTypeExtends } from "./likeType";
import { PageviewTypeExtends } from "./pageviewType";
import { StarTypeExtends } from "./starType";

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
  stars?: StarTypeExtends[];
  pageviews?: PageviewTypeExtends[];
}
