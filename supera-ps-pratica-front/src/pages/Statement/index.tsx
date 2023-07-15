import React, { useEffect, useState } from 'react'
import DateInput from '../../components/DateInput';
import { Button, ButtonContainer, Container, Content, FormContainer, Header, Search, ThemeToogle, Title } from './styles';
import { useTheme } from '../../hooks/theme';
import Toggle from '../../components/Toggle';
import TableComponent from '../../components/Table';
import { StatementController } from './controler';
import SimpleInput from '../../components/SimpleInput';
import ErrorMessage from '../../components/ErrorMessage';

type Data = {
  data: string;
  value: number;
  type: string;
  operator: string;
}

type StatementData = {
  id: number;
  transactionDate: string;
  amount: number;
  type: string;
  transactionOperatorName: string;
  account: {
    accountId: number;
    responsibleName: string;
  };
};

const Statement: React.FC = () =>{
    const {toggleTheme, theme} = useTheme();
    
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const [startDateValue, setStartDateValue] = useState('');
    const [endDateValue, setEndDateValue] = useState('');
    const [operator, setOperator] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(true);

    const [data, setData] = useState<Data[]>([]);

    function convertDateFormat(inputDate: string): string {
      const date = new Date(inputDate);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear());
    
      return `${day}/${month}/${year}`;
    }    
    
    const doSearch = () => {
      StatementController(startDateValue, endDateValue, operator)
      .then((response) => {
        const newData = response.data.map((statement: StatementData) => {
          return {
            data: convertDateFormat(statement.transactionDate),
            value: statement.amount,
            type: statement.type,
            operator: statement.transactionOperatorName,
          }
        })
        setData(newData)
      }).catch((error) => {
        console.log(error)
      })
    }

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if ((startDateValue === '' && endDateValue !== '') 
        || (startDateValue !== '' && endDateValue === '')) {
        setMessage('É necessário preencher as duas datas ou nenhuma delas');
        setError(true);
        return
      }
      setError(false);
      doSearch()
    }

    const handleToggleTheme = () => {
      setDarkTheme(!darkTheme);
      toggleTheme();
    }

    const handleStartDateChange = (date: string) => {
      setStartDateValue(date);
    }

    const handleEndDateChange = (date: string) => {
      setEndDateValue(date);
    }

    const handleOpeartorChange = (op: string) => {
      setOperator(op);
    }
    
    useEffect(() => {
      doSearch();
    }, []);

    return (
      <Container>
        <Content>
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
          <Search>
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <DateInput label="Data de Início" onDateChange={handleStartDateChange} />
                <DateInput label="Data de Fim" onDateChange={handleEndDateChange} />
                <SimpleInput label="Nome do operador transacionado" onDateChange={handleOpeartorChange} />
              </FormContainer>
              <ErrorMessage display={error} text={message}/>
              <ButtonContainer>
                <Button type="submit">Pesquisar</Button>
              </ButtonContainer>
            </form>
            <TableComponent data={data}/>
          </Search>
        </Content>
      </Container>
    );
}

export default Statement;
