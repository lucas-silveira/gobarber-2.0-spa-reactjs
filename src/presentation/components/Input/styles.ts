import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

type ContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  color: #555360;
  background-color: #232129;
  padding: 16px;
  border-radius: 10px;
  border: 2px solid #232129;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    color: #f4ede8;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #555360;
    }

    &:-webkit-autofill {
      font-size: 16px;
      -webkit-text-fill-color: #f4ede8;
      -webkit-box-shadow: 0 0 0 30px #232129 inset;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
