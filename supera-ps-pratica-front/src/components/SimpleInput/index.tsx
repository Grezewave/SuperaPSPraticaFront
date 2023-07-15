import React, { ChangeEvent } from 'react';
import { Container, Input, Label } from './styles';

interface DateInputProps {
  label: string
  onDateChange: (date: string) => void
}

const DateInput = ({ label, onDateChange }: DateInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onDateChange(event.target.value);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input type="text" onChange={handleChange} />
    </Container>
  );
}

export default DateInput;
