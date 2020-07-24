import { IAuth } from '../../../../../domain/entities/Auth.interface';

export interface IGetAuthController {
  handle(): IAuth;
}
