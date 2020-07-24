import api from '../httpConfig';
import { ICreateAuthAPI } from '../../../../domain/protocols/api/APICreateAuth.interface';
import { ICredentials } from '../../../../domain/entities/Credentials.interface';

class AxiosHttpCreateAuthAdapter implements ICreateAuthAPI {
  public async call<T extends any>(credentials: ICredentials): Promise<T> {
    const response = await api.post('/authentication', credentials);
    return response.data;
  }
}

export default AxiosHttpCreateAuthAdapter;
