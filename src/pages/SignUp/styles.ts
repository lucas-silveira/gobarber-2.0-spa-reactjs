import styled from 'styled-components';
import { shade } from 'polished';

import barbershopBg from '../../assets/img/barbershop-bg.png';

export const ContentLeft = styled.div`
  flex: 1;
  background: url(${barbershopBg}) no-repeat center;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  form {
    width: 340px;
    text-align: center;
    margin: 80px 0;

    h1 {
      margin-bottom: 24px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f4ede8;
      text-decoration: none;
      margin-top: 24px;
      transition: 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }

      svg {
        margin-right: 16px;
      }
    }
  }
`;
