import { PostToCategoryType } from "./postToCategoryType";

export interface CategoryType {
  readonly id?: string;
  posts: PostToCategoryType[];
  categoryName: string;
  createdAt: Date;
}

export interface RequestCategoryType {
  categoryName: string;
}
