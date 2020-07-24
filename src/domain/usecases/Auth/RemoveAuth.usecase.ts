import { IRemoveAuth } from './RemoveAuth.interface';
import { ICredentialsRepository } from '../../protocols/repository/CredentialsRepository.interface';

class RemoveAuth implements IRemoveAuth {
  private readonly credentialsRepository: ICredentialsRepository;

  constructor(credentialsRepository: ICredentialsRepository) {
    this.credentialsRepository = credentialsRepository;
  }

  public execute(): void {
    this.credentialsRepository.remove();
  }
}

export default RemoveAuth;
