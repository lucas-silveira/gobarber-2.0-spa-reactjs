import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  color: #312e38;
  background-color: #ff9000;
  font-weight: 500;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  border: 0;
  transition: 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
