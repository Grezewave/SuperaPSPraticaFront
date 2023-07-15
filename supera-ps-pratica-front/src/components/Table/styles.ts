import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.gray};
`;

export const TableContainer = styled.table`
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
`;

export const Td = styled.td`
`;

export const ThText = styled.p`
    color: ${props => props.theme.colors.white};
`;

export const TdText = styled.p`
    color: ${props => props.theme.colors.white};
`;
