import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;