export interface PostToCategoryType {
  readonly id?: string;
  postId: string;
  categoryId: string;
  createdAt: Date;
}

export interface RequestPostToCategoryType {
  postId: string;
  categoryId: string;
}
