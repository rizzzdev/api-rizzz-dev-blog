import { PostToCategory } from "./postToCategoryType";

export interface Category {
  readonly id?: string;
  postToCategories: PostToCategory[];
  categoryName: string;
  createdAt: Date;
}
