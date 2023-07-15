import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.success};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

export const ThemeToogle = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  border-bottom: 1px solid ${props => props.theme.colors.gray};

`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  width: 70%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 40px;
`

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: ${props => props.theme.colors.white};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  width: 100%;
`
