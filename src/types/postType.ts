import { AuthorTypeExtends } from "./authorType";
import { CommentTypeExtends } from "./commentType";
import { LikeTypeExtends } from "./likeType";
import { PageviewTypeExtends } from "./pageviewType";
import { PostToCategoryTypeExtends } from "./postToCategoryType";

export interface RequestPostType {
  title: string;
  description: string;
  postMarkdown: string;
  imageUrl?: string;
  authorId: string;
}

export interface PostType extends RequestPostType {
  readonly id?: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface PostTypeExtends extends PostType {
  likes?: LikeTypeExtends[];
  comments?: CommentTypeExtends[];
  categories?: PostToCategoryTypeExtends[];
  pageviews?: PageviewTypeExtends[];
  author?: AuthorTypeExtends;
}
