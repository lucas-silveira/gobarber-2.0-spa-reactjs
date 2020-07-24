import api from '../httpConfig';
import { ICreateUserAPI } from '../../../../domain/protocols/api/APICreateUser.interface';
import { IUser } from '../../../../domain/entities/User.interface';

class AxiosHttpCreateUserAdapter implements ICreateUserAPI {
  public async call<T extends any>(user: IUser): Promise<T> {
    return api.post('/users', user);
  }
}

export default AxiosHttpCreateUserAdapter;
