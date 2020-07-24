import { ICreateUserController } from './CreateUserController.interface';
import { ICreateUser } from '../../../../domain/usecases/User/CreateUser.interface';
import { ICreateUserValidator } from '../../../../utils/Validator/User/CreateUserValidator.interface';

class CreateUserController implements ICreateUserController {
  private readonly createUser: ICreateUser;

  private readonly validator: ICreateUserValidator;

  constructor(createUser: ICreateUser, validator: ICreateUserValidator) {
    this.createUser = createUser;
    this.validator = validator;
  }

  async handle({
    name,
    email,
    password,
  }: ICreateUserController.Input): Promise<void> {
    await this.validator.validate({ name, email, password });
    await this.createUser.execute({ name, email, password });
  }
}

export default CreateUserController;
