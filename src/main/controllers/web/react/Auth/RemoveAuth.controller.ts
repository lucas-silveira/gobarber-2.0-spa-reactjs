import { IRemoveAuthController } from './RemoveAuthController.interface';
import { IRemoveAuth } from '../../../../../domain/usecases/Auth/RemoveAuth.interface';

class GetAuthController implements IRemoveAuthController {
  private readonly getAuth: IRemoveAuth;

  constructor(getAuth: IRemoveAuth) {
    this.getAuth = getAuth;
  }

  handle(): void {
    return this.getAuth.execute();
  }
}

export default GetAuthController;
