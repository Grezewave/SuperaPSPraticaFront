import React, { useState } from 'react'
import DateInput from '../../components/DateInput';
import { Button, ButtonContainer, Container, FormContainer, Header, ThemeToogle, Title } from './styles';
import { useTheme } from '../../hooks/theme';
import Toggle from '../../components/Toggle';

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
      </Container>
    );
}

export default Statement;
