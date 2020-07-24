import { IAuth } from '../../entities/Auth.interface';

export interface IGetAuth {
  execute(): IAuth;
}
