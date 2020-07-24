import { ICreateUser } from './CreateUser.interface';
import User from '../../entities/User';
import { ICreateUserAPI } from '../../protocols/api/APICreateUser.interface';

class CreateUser implements ICreateUser {
  private readonly api: ICreateUserAPI;

  constructor(api: ICreateUserAPI) {
    this.api = api;
  }

  public async execute({
    name,
    email,
    password,
  }: ICreateUser.Input): Promise<void> {
    const user = new User(name, email, password);
    await this.api.call(user);
  }
}

export default CreateUser;
