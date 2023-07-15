import React, { useState } from 'react'
import DateInput from '../../components/DateInput';
import { Button, ButtonContainer, Container, FormContainer, Header, ThemeToogle, Title } from './styles';
import { useTheme } from '../../hooks/theme';
import Toggle from '../../components/Toggle';
import Table from '../../components/Table';

type Data = {
  data: string;
  value: number;
  type: string;
  operator: string;
}

const dadosExemplo: Data[] = [
  { data: '01/01/2023', value: 100, type: 'Entrada', operator: 'João' },
  { data: '02/01/2023', value: -50, type: 'Saída', operator: 'Maria' },
  { data: '03/01/2023', value: 200, type: 'Entrada', operator: 'Pedro' },
  { data: '04/01/2023', value: -75, type: 'Saída', operator: 'Ana' },
  { data: '05/01/2023', value: 150, type: 'Entrada', operator: 'José' },
  { data: '06/01/2023', value: -30, type: 'Saída', operator: 'Laura' },
  { data: '07/01/2023', value: 80, type: 'Entrada', operator: 'Carlos' },
  { data: '08/01/2023', value: -20, type: 'Saída', operator: 'Mariana' },
  { data: '09/01/2023', value: 120, type: 'Entrada', operator: 'Roberto' },
  { data: '10/01/2023', value: -10, type: 'Saída', operator: 'Renata' },
];

const Statement: React.FC = () =>{
    const {toggleTheme, theme} = useTheme();

    console.log(theme)
    
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const [dateValue, setDateValue] = useState('');
    
    

    const handleToggleTheme = () => {
      setDarkTheme(!darkTheme);
      toggleTheme();
    }

    const handleDateChange = (date: string) => {
      setDateValue(date);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Valor da data:', dateValue);
    };
  
    return (
      <Container>
        <Header>
          <Title>Meu Extrato</Title>
          <ThemeToogle>
            <Toggle
              labelLeft="Light"
              labelRight="Dark"
              checked={darkTheme}
              onChange={handleToggleTheme}
            />
          </ThemeToogle>
        </Header>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <DateInput label="Data de Início" onDateChange={handleDateChange} />
            <DateInput label="Data de Fim" onDateChange={handleDateChange} />
            <DateInput label="Nome do operador transacionado" onDateChange={handleDateChange} />
          </FormContainer>
          <ButtonContainer>
            <Button type="submit">Pesquisar</Button>
          </ButtonContainer>
        </form>
        <Table data={dadosExemplo}/>
      </Container>
    );
}

export default Statement;
