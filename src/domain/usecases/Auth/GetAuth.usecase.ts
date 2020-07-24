import { IGetAuth } from './GetAuth.interface';
import { ICredentialsRepository } from '../../protocols/repository/CredentialsRepository.interface';
import { IAuth } from '../../entities/Auth.interface';

class CreateAuth implements IGetAuth {
  private readonly credentialsRepository: ICredentialsRepository;

  constructor(credentialsRepository: ICredentialsRepository) {
    this.credentialsRepository = credentialsRepository;
  }

  public execute(): IAuth {
    const { token, user } = this.credentialsRepository.get<IAuth>();

    return {
      token,
      user,
    };
  }
}

export default CreateAuth;
