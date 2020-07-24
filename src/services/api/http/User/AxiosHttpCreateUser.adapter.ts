import api from '../httpConfig';
import { IAPICreateUser } from '../../../../domain/protocols/api/APICreateUser.interface';
import { IUser } from '../../../../domain/entities/User.interface';

class AxiosHttpCreateUserAdapter implements IAPICreateUser {
  public async call(user: IUser): Promise<any> {
    return api.post('/users', user);
  }
}

export default AxiosHttpCreateUserAdapter;
