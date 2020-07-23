import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { useToast } from '../../context/hooks';

import { Container } from './styles';
import Toast from './Toast';

const ToastContainer: React.FC = () => {
  const { messages } = useToast();

  return (
    <Container>
      <AnimatePresence>
        {messages.map(message => (
          <Toast
            key={message.id}
            id={message.id}
            type={message.type || 'info'}
            title={message.title}
            description={message.description || ''}
          />
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default ToastContainer;
