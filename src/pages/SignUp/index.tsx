import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImage from '../../assets/img/logo.svg';
import { Container, ContentLeft, ContentRight } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <ContentLeft />
    <ContentRight>
      <img src={logoImage} alt="Logotipo GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input type="text" name="name" placeholder="Nome" icon={FiUser} />
        <Input type="text" name="email" placeholder="E-mail" icon={FiMail} />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button type="submit">Cadastrar</Button>

        <a href="new-account">
          <FiArrowLeft />
          Voltar para login
        </a>
      </form>
    </ContentRight>
  </Container>
);

export default SignUp;
