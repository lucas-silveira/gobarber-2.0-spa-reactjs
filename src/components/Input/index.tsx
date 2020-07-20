import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

type InputProps = Props & InputHTMLAttributes<HTMLInputElement>;

type Props = {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        type="text"
        {...props}
      />
      {error}
    </Container>
  );
};

export default Input;
