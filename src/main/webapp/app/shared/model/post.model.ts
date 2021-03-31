import { Moment } from 'moment';
import { IUser } from 'app/shared/model/user.model';

export interface IPost {
  id?: number;
  title?: string;
  content?: string;
  creationDate?: string;
  creator?: IUser;
}

export const defaultValue: Readonly<IPost> = {};
