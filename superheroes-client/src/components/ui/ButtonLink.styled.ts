import styled from "styled-components";
import { Link as LinkElement } from "react-router-dom";

export const ButtonLink = styled(LinkElement)`
align-self: center;
padding: 10px 30px;

text-transform: uppercase;
letter-spacing: 3px;
color: ${props => props.theme.palette.primary.contrastText};
background-color: ${props => props.theme.palette.primary.main};

border: 1px solid ${props => props.theme.palette.primary.contrastText};
border-radius: ${props => props.theme.borderRadius};

&:hover {
  color: ${props => props.theme.palette.secondary.contrastText};
  background-color: ${props => props.theme.palette.secondary.main};
  border: 1px solid ${props => props.theme.palette.secondary.contrastText};
}
`