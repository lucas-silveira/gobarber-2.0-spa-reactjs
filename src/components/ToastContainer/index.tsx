import React from 'react';
import { useTransition } from 'react-spring';

import { useToast } from '../../context/hooks';

import { Container } from './styles';
import Toast from './Toast';

const ToastContainer: React.FC = () => {
  const { messages } = useToast();
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast
          key={key}
          style={props}
          id={item.id}
          type={item.type || 'info'}
          title={item.title}
          description={item.description || ''}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
