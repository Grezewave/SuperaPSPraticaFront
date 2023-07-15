import React, { ChangeEvent } from 'react';
import { Container, Input, Label } from './styles';

interface DateInputProps {
  label: string
  onDateChange: (date: string) => void
}

const DateInput = ({ label, onDateChange }: DateInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    const [day, month, year] = inputValue.split('/');
    const formattedDate = `${year}-${month}-${day}T00:00:00`;

    onDateChange(formattedDate);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input type="text" onChange={handleChange} />
    </Container>
  );
}

export default DateInput;
