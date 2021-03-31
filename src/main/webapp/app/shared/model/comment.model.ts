import { Moment } from 'moment';
import { IPost } from 'app/shared/model/post.model';

export interface IComment {
  id?: number;
  text?: string;
  creationDate?: string;
  post?: IPost;
}

export const defaultValue: Readonly<IComment> = {};
