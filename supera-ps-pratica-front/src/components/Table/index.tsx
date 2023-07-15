import React from 'react';
import { Container, TableContainer, Tbody, Td, TdText, Th, ThText, Thead, Tr } from './styles';

type Data = {
  data: string;
  value: number;
  type: string;
  operator: string;
}

type Header = {
  Header: string;
  accessor: string;
}

interface TableProps {
  data: Data[];
}

const getProperty = <T extends keyof Data>(objeto: Data, propriedade: T) => {
  return objeto[propriedade];
};

const Table: React.FC<TableProps> = ({ data }) => {
  const columns = [
      {
        Header: 'Data',
        accessor: 'data',
      },
      {
        Header: 'Valor',
        accessor: 'value',
      },
      {
        Header: 'Tipo',
        accessor: 'type',
      },
      {
        Header: 'Operador',
        accessor: 'operator',
      },
    ];

  console.log(data)

  if (data.length === 0) {
    return <p>Nenhuma transação disponível.</p>;
  }

  return (
    <Container>
      <TableContainer>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.Header}>
                <ThText>{column.Header}</ThText>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
              <Tr>
                {columns.map((column) => (
                  <Td key={column.accessor}>
                    <TdText>{row[column.accessor as keyof Data]}</TdText>
                  </Td>
                ))}
              </Tr>
            )
          )}
        </Tbody>
      </TableContainer>
    </Container>
  );
};

export default Table;
