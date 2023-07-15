import React, { useState } from 'react';
import { Table, Pagination } from 'antd';
import Column from 'antd/es/table/Column';
import { Container } from './styles';

type Data = {
  data: string;
  value: number;
  type: string;
  operator: string;
}

interface TableComponentProps {
  data: Data[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const handleChangePage = (page: number, pageSize?: number) => {
    setCurrentPage(page);
  };

  const handleChangePageSize = (current: number, size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const slicedData = data.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);

  return (
    <Container>
      <Table
        dataSource={slicedData}
        pagination={false}
        style={{ width: '100%', height: '100%' }}
      >
        <Column title="Data" dataIndex="data" key="data" />
        <Column title="Valor" dataIndex="value" key="value" />
        <Column title="Tipo" dataIndex="type" key="type" />
        <Column title="Operador" dataIndex="operator" key="operator" />
      </Table>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handleChangePage}
        onShowSizeChange={handleChangePageSize}
        showSizeChanger
        showTotal={(total, range) => `${range[0]}-${range[1]} de ${total} itens`}
      />
    </Container>
  );
};

export default TableComponent;
