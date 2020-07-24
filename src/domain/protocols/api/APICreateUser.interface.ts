import { IUser } from '../../entities/User.interface';

export interface IAPICreateUser {
  call(user: IUser): Promise<any>;
}
