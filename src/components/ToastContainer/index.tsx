import React from 'react';

import { useToast } from '../../context/hooks';

import { Container } from './styles';
import Toast from './Toast';

const ToastContainer: React.FC = () => {
  const { messages } = useToast();

  return (
    <Container>
      {messages.map(message => (
        <Toast
          key={message.id}
          id={message.id}
          type={message.type || 'info'}
          title={message.title}
          description={message.description || ''}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
