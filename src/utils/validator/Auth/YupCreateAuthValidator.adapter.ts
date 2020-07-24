import * as Yup from 'yup';
import { ICreateAuthValidator } from '../../../domain/protocols/validator/CreateAuthValidator.interface';

class YupCreateAuthValidatorAdapter implements ICreateAuthValidator {
  async validate({
    email,
    password,
  }: ICreateAuthValidator.Input): Promise<void> {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('E-mail obrigatório'),
      password: Yup.string().required('Senha obrigatória'),
    });

    await schema.validate(
      { email, password },
      {
        abortEarly: false,
      },
    );
  }
}

export default YupCreateAuthValidatorAdapter;
