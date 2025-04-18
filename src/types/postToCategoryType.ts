import { CategoryTypeExtends } from "./categoryType";
import { PostTypeExtends } from "./postType";

export interface RequestPostToCategoryType {
  postId: string;
  categoryId: string;
}

export interface PostToCategoryType extends RequestPostToCategoryType {
  readonly id?: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface PostToCategoryTypeExtends extends PostToCategoryType {
  post?: PostTypeExtends;
  category?: CategoryTypeExtends;
}
