import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { useAuth, useToast } from '../../context/hooks';

import logoImage from '../../assets/img/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';
import { Input, Button } from '../../components';
import {
  Container,
  ContentLeft,
  AnimationContainer,
  ContentRight,
} from './styles';

type submitData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: submitData): Promise<void> => {
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

        const { email, password } = data;

        await signIn({ email, password });
        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: err.response?.data.message || 'Cheque suas credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <ContentLeft>
        <AnimationContainer>
          <img src={logoImage} alt="Logotipo GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input
              type="text"
              name="email"
              placeholder="E-mail"
              icon={FiMail}
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              icon={FiLock}
            />
            <Button type="submit">Entrar</Button>

            <Link to="forgot-password">Esqueci minha senha</Link>
            <Link to="sign-up">
              <FiLogIn />
              Criar conta
            </Link>
          </Form>
        </AnimationContainer>
      </ContentLeft>
      <ContentRight />
    </Container>
  );
};

export default SignIn;
