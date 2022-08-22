import styled from "styled-components";
import { Link as LinkElement } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const Item = styled.li<{itemHight: string}>`
  display: flex;
  flex-basis: 33%;
  height: ${props => props.itemHight};

  box-sizing: border-box;
  padding: 10px;
`

export const Link = styled(LinkElement)`
  flex: 1 1 auto;
`

export const Card = styled.figure`
  display: flex;
  flex-direction: column;
 
  height: 100%;
  width: 100%;

  box-sizing: border-box;
  margin: 0;
  padding: 20px;

  border: 2px solid ${props => props.theme.palette.secondary.main};
  border-radius: ${props => props.theme.borderRadius};

  background-color: ${props => props.theme.palette.secondary.contrastText};
  color: ${props => props.theme.palette.secondary.main};
  box-shadow: 2px 2px 10px ${props => props.theme.palette.secondary.main};;

  &:hover{
    border: 3px solid ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.main};
    box-shadow: 2px 2px 10px ${props => props.theme.palette.primary.main};;
  } 
`

export const ImageContainer = styled.div`
  max-height: 250px;
  flex: 1 1 auto;
`

export const Image = styled.img`
  border-radius: ${props => props.theme.borderRadius};
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const ImageDescribe = styled.figcaption`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
`