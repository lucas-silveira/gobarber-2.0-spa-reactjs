import { IUser } from '../../domain/entities/User.interface';

export interface IAPICreateUser {
  call(user: IUser): Promise<any>;
}
