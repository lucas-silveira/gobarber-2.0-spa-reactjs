import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../context/hooks';

import logoImage from '../../assets/img/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';
import { Input, Button } from '../../components';
import {
  Container,
  ContentLeft,
  ContentRight,
  AnimationContainer,
} from './styles';

type submitData = {
  name: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: submitData): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        await api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso',
        });
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            err.response?.data.message ||
            'Tente novamente ou contate o suporte',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <ContentLeft />
      <ContentRight>
        <AnimationContainer>
          <img src={logoImage} alt="Logotipo GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input type="text" name="name" placeholder="Nome" icon={FiUser} />
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
            <Button type="submit">Cadastrar</Button>

            <Link to="/">
              <FiArrowLeft />
              Voltar para login
            </Link>
          </Form>
        </AnimationContainer>
      </ContentRight>
    </Container>
  );
};

export default SignUp;
