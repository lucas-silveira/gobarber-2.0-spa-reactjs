import React, { createContext, useState, useCallback, useContext } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

type ToastContextData = {
  messages: IToastMessage[];
  addToast(dto: AddToastDTO): void;
  removeToast(id: string): void;
};

export interface IToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}

type AddToastDTO = Omit<IToastMessage, 'id'>;

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description }: AddToastDTO) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages(oldMessages => [...oldMessages, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages =>
      oldMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ messages, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast mus be used inside a ToastProvider');

  return context;
};
