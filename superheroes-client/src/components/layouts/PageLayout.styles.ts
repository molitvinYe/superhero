import styled from "styled-components";

export const Header = styled.header`
  padding: 10px 0;
  background-color: ${props => props.theme.bg.secondary};
`;

export const HeaderRow = styled.div`
  display: flex;
`;

export const Main = styled.main`
  display: flex;
  flex: 1 1 auto;
  overflow: auto;

  background-color: ${props => props.theme.bg.primary};
`

export const Footer = styled.footer`
  padding: 10px;
  background-color: ${props => props.theme.bg.secondary};
`

export const Author = styled.address`
  align-self: center;
  color: ${props => props.theme.palette.primary.main};
`