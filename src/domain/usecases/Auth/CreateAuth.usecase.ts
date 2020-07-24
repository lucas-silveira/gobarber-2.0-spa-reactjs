import { ICreateAuth } from './CreateAuth.interface';
import { ICreateAuthAPI } from '../../protocols/api/APICreateAuth.interface';
import Credentials from '../../entities/Credentials';
import { ICredentialsRepository } from '../../protocols/repository/CredentialsRepository.interface';
import { IAuth } from '../../entities/Auth.interface';

class CreateAuth implements ICreateAuth {
  private readonly createAuthAPI: ICreateAuthAPI;

  private readonly credentialsRepository: ICredentialsRepository;

  constructor(
    createAuthAPI: ICreateAuthAPI,
    credentialsRepository: ICredentialsRepository,
  ) {
    this.createAuthAPI = createAuthAPI;
    this.credentialsRepository = credentialsRepository;
  }

  public async execute({ email, password }: ICreateAuth.Input): Promise<IAuth> {
    const credentials = new Credentials(email, password);
    const apiResponse = await this.createAuthAPI.call<IAuth>(credentials);
    const { token, user } = apiResponse;

    this.credentialsRepository.save<IAuth>({ token, user });

    return apiResponse;
  }
}

export default CreateAuth;
