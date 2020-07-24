import { ICredentials } from './Credentials.interface';

class Credentials implements ICredentials {
  public readonly email: string;

  public readonly password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export default Credentials;
