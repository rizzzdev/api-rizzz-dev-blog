import { PostTypeExtends } from "./postType";

export interface RequestAuthorType {
  authorId: string;
  password: string;
  fullName: string;
}

export interface AuthorType extends RequestAuthorType {
  readonly id?: string;
  registeredAt: Date;
  deletedAt?: Date;
}
export interface AuthorTypeExtends extends AuthorType {
  posts?: PostTypeExtends[];
}
