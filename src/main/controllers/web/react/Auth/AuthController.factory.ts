import CreateAuthController from './CreateAuth.controller';
import GetAuthController from './GetAuth.controller';
import RemoveAuthController from './RemoveAuth.controller';
import CreateAuth from '../../../../../domain/usecases/Auth/CreateAuth.usecase';
import GetAuth from '../../../../../domain/usecases/Auth/GetAuth.usecase';
import RemoveAuth from '../../../../../domain/usecases/Auth/RemoveAuth.usecase';
import YupCreateAuthValidator from '../../../../../utils/validator/Auth/YupCreateAuthValidator.adapter';
import IAuthControllerFactory from './AuthControllerFactory.interface';
import AxiosHttpCreateAuthAdapter from '../../../../../services/api/http/Auth/AxiosHttpCreateAuth.adapter';
import LSCredentialsRepository from '../../../../../infra/repositories/localStorage/LSCredentialsRepository.adapter';

const AuthControllerFactory = (): IAuthControllerFactory => {
  const axiosHttpCreateAuthAdapter = new AxiosHttpCreateAuthAdapter();
  const lsCredentialsRepository = new LSCredentialsRepository();
  const createAuth = new CreateAuth(
    axiosHttpCreateAuthAdapter,
    lsCredentialsRepository,
  );
  const getAuth = new GetAuth(lsCredentialsRepository);
  const removeAuth = new RemoveAuth(lsCredentialsRepository);
  const yupCreateAuthValidator = new YupCreateAuthValidator();
  const createAuthController = new CreateAuthController(
    createAuth,
    yupCreateAuthValidator,
  );
  const getAuthController = new GetAuthController(getAuth);
  const removeAuthController = new RemoveAuthController(removeAuth);

  return {
    createAuth: createAuthController,
    getAuth: getAuthController,
    removeAuth: removeAuthController,
  };
};

export default AuthControllerFactory;
