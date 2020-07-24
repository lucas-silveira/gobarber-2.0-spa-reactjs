import { IUser } from '../../entities/User.interface';

export interface ICreateUserAPI {
  call<T extends any>(user: IUser): Promise<T>;
}
