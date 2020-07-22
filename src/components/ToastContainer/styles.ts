import styled, { css } from 'styled-components';

type ToastProps = {
  type?: ToastTypes;
  hasDescription: boolean;
};

type ToastTypes = 'info' | 'success' | 'error';

const toastTypeVariations = {
  info: css`
    color: #3172b7;
    background-color: #ebf8ff;
  `,
  success: css`
    color: #2e656a;
    background-color: #e6fffa;
  `,
  error: css`
    color: #c53030;
    background-color: #fddede;
  `,
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
  position: relative;
  display: flex;
  width: 360px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      font-size: 14px;
      line-height: 20px;
      margin-top: 4px;
      opacity: 0.8;
    }
  }

  button {
    height: 18px;
    align-self: flex-start;
    color: inherit;
    margin-top: 4px;
    border: 0;
    opacity: 0.6;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      > svg {
        margin-top: 0;
      }

      button {
        align-self: center;
        margin-top: 0;
      }
    `}
`;
