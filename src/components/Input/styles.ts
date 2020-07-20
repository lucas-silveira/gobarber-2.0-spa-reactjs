import styled from 'styled-components';

export const Container = styled.div`
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
