import React from 'react';
import { Container, P } from './styles';

interface ErrorMessageProps {
  display: boolean;
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ display, text }) => {
  if (!display) {
    return (
      <></>
    )
  }

  return (
    <Container>
      <P>{text}</P>
    </Container>
  )
};

export default ErrorMessage;
