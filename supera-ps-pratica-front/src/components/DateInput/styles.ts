import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.white};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 40px;
`
