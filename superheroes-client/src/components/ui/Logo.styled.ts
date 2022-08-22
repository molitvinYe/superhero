import styled from "styled-components";
import { ReactComponent as IconElement } from "../../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled(IconElement)`
  width: 50px;
  height: 50px;
  fill: ${props => props.theme.palette.primary.main};
`

export const Typography = styled.div`
  font-size: large;
  color: ${props => props.theme.palette.primary.main};
`