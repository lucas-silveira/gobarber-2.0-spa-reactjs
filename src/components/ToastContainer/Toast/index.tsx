import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { IToastMessage } from '../../../context/ToastContext';
import { useToast } from '../../../context/hooks';

import { Container } from './styles';

type ToastProps = Required<IToastMessage>;

const TIME_TO_CLOSE = 3000;

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ id, type, title, description }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, TIME_TO_CLOSE);

    // A função abaixo é executada quando o componente deixa de existir
    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <Container type={type} hasDescription={!!description}>
      {icons[type]}
      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(id)}>
        <FiXCircle />
      </button>
    </Container>
  );
};

export default Toast;
