import { ICreateUser } from './CreateUser.interface';
import User from '../../entities/User';
import { IAPICreateUser } from '../../protocols/api/APICreateUser.interface';

class CreateUser implements ICreateUser {
  private readonly api: IAPICreateUser;

  constructor(api: IAPICreateUser) {
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
