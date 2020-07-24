import { ICreateUserController } from './CreateUserController.interface';
import { ICreateUser } from '../../../../../domain/usecases/User/CreateUser.interface';
import { ICreateUserValidator } from '../../../../../domain/protocols/validator/CreateUserValidator.interface';

class CreateUserController implements ICreateUserController {
  private readonly createUser: ICreateUser;

  private readonly createUserValidator: ICreateUserValidator;

  constructor(
    createUser: ICreateUser,
    createUserValidator: ICreateUserValidator,
  ) {
    this.createUser = createUser;
    this.createUserValidator = createUserValidator;
  }

  async handle({
    name,
    email,
    password,
  }: ICreateUserController.Input): Promise<void> {
    await this.createUserValidator.validate({ name, email, password });
    await this.createUser.execute({ name, email, password });
  }
}

export default CreateUserController;
