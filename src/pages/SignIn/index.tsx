import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImage from '../../assets/img/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';
import { Input, Button } from '../../components';
import { Container, ContentLeft, ContentRight } from './styles';

type submitData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: submitData): Promise<void> => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <ContentLeft>
        <img src={logoImage} alt="Logotipo GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input type="text" name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>

          <a href="forgot-password">Esqueci minha senha</a>
          <a href="new-account">
            <FiLogIn />
            Criar conta
          </a>
        </Form>
      </ContentLeft>
      <ContentRight />
    </Container>
  );
};

export default SignIn;
