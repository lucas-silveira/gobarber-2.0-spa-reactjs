import { IGetAuthController } from './GetAuthController.interface';
import { IGetAuth } from '../../../../../domain/usecases/Auth/GetAuth.interface';
import { IAuth } from '../../../../../domain/entities/Auth.interface';

class GetAuthController implements IGetAuthController {
  private readonly getAuth: IGetAuth;

  constructor(getAuth: IGetAuth) {
    this.getAuth = getAuth;
  }

  handle(): IAuth {
    return this.getAuth.execute();
  }
}

export default GetAuthController;
