import { PostType } from "./postType";

export interface AuthorType {
  readonly id?: string;
  authorId: string;
  password: string;
  fullName: string;
  posts: PostType[];
  registeredAt: Date;
}
