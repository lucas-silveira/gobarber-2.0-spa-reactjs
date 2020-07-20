import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImage from '../../assets/img/logo.svg';
import { Container, ContentLeft, ContentRight } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <ContentLeft>
      <img src={logoImage} alt="Logotipo GoBarber" />

      <form>
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
      </form>
    </ContentLeft>
    <ContentRight />
  </Container>
);

export default SignIn;
