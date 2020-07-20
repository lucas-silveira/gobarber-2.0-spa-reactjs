import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type InputProps = Props & InputHTMLAttributes<HTMLInputElement>;

type Props = {
  icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input type="text" {...props} />
  </Container>
);

export default Input;
