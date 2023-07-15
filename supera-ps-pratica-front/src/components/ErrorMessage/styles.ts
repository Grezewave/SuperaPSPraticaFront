import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const P = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.warning};
`
