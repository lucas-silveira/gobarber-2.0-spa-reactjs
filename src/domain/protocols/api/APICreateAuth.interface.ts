import { ICredentials } from '../../entities/Credentials.interface';

export interface ICreateAuthAPI {
  call<T extends any>(credentials: ICredentials): Promise<T>;
}
