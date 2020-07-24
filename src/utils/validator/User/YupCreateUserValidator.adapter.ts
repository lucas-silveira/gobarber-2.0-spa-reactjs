import * as Yup from 'yup';
import { ICreateUserValidator } from '../../../domain/protocols/validator/CreateUserValidator.interface';

class YupValidatorAdapter implements ICreateUserValidator {
  async validate({
    name,
    email,
    password,
  }: ICreateUserValidator.Input): Promise<void | Error> {
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('E-mail obrigatório'),
      password: Yup.string().min(6, 'No mínimo 6 dígitos'),
    });

    await schema.validate(
      { name, email, password },
      {
        abortEarly: false,
      },
    );
  }
}

export default YupValidatorAdapter;
