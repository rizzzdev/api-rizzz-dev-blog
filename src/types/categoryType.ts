import { PostToCategoryTypeExtends } from "./postToCategoryType";

export interface RequestCategoryType {
  categoryName: string;
}

export interface CategoryType extends RequestCategoryType {
  readonly id?: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface CategoryTypeExtends extends CategoryType {
  posts?: PostToCategoryTypeExtends[];
}
