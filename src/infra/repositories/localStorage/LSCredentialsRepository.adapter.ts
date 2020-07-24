import { ICredentialsRepository } from '../../../domain/protocols/repository/CredentialsRepository.interface';

class LSCredentialsRepositoryAdapter implements ICredentialsRepository {
  private data: string;

  constructor() {
    this.data = '';
  }

  public get<T>(): T {
    return JSON.parse(localStorage.getItem('@gobarber:auth') || '{}');
  }

  public save<T>(data: T): void {
    this.data = JSON.stringify(data);
    localStorage.setItem('@gobarber:auth', this.data);
  }

  public remove(): void {
    localStorage.removeItem('@gobarber:auth');
  }
}

export default LSCredentialsRepositoryAdapter;
