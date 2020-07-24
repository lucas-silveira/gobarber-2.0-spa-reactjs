import { ICreateAuthController } from './CreateAuthController.interface';
import { ICreateAuth } from '../../../../../domain/usecases/Auth/CreateAuth.interface';
import { ICreateAuthValidator } from '../../../../../domain/protocols/validator/CreateAuthValidator.interface';
import { IAuth } from '../../../../../domain/entities/Auth.interface';

class CreateAuthController implements ICreateAuthController {
  private readonly createAuth: ICreateAuth;

  private readonly createAuthValidator: ICreateAuthValidator;

  constructor(
    createAuth: ICreateAuth,
    createAuthValidator: ICreateAuthValidator,
  ) {
    this.createAuth = createAuth;
    this.createAuthValidator = createAuthValidator;
  }

  async handle({
    email,
    password,
  }: ICreateAuthController.Input): Promise<IAuth> {
    await this.createAuthValidator.validate({ email, password });
    const session = await this.createAuth.execute({ email, password });
    return session;
  }
}

export default CreateAuthController;
