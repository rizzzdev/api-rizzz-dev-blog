import { CommentType } from "./commentType";
import { LikeType } from "./likeType";
import { PostToCategoryType } from "./postToCategoryType";
import { StarType } from "./starType";

export interface PostType {
  readonly id?: string;
  title: string;
  postMarkdown: string;
  authorId: string;
  likes: LikeType[];
  comments: CommentType[];
  stars: StarType[];
  categories: PostToCategoryType[];
  createdAt: Date;
}
