import CreateUserController from './CreateUser.controller';
import CreateUser from '../../../../domain/usecases/User/CreateUser.usecase';
import YupCreateUserValidator from '../../../../utils/Validator/User/YupCreateUserValidator.adapter';
import IUserControllerFactory from './UserControllerFactory.interface';
import AxiosHttpCreateUserAdapter from '../../../../services/apis/http/User/AxiosHttpCreateUser.adapter';

const UserControllerFactory = (): IUserControllerFactory => {
  const axiosHttpCreateUserAdapter = new AxiosHttpCreateUserAdapter();
  const createUser = new CreateUser(axiosHttpCreateUserAdapter);
  const yupCreateUserValidator = new YupCreateUserValidator();
  const createUserController = new CreateUserController(
    createUser,
    yupCreateUserValidator,
  );

  return {
    createUser: createUserController,
  };
};

export default UserControllerFactory;
