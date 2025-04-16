export interface PostToCategoryType {
  readonly id?: string;
  postId: string;
  categoryId: string;
  createdAt: Date;
}
