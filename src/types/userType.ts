import { CommentType } from "./commentType";
import { LikeType } from "./likeType";
import { StarType } from "./starType";

export interface UserType {
  readonly id?: string;
  fullName: string;
  registeredAt: Date;
  comments: CommentType[];
  likes: LikeType[];
  stars: StarType[];
}
