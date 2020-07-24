import CreateAuthController from './CreateAuth.controller';
import GetAuthController from './GetAuth.controller';
import RemoveAuthController from './RemoveAuth.controller';

export default interface IAuthControllerFactory {
  createAuth: CreateAuthController;
  getAuth: GetAuthController;
  removeAuth: RemoveAuthController;
}
