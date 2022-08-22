import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavigateRow = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const LeftColumn = styled(Column)`
  background: ${props => props.theme.palette.primary.main};
  padding: 20px;
`

export const RightColumn = styled(Column)`
  justify-content: space-between;
  flex: 1 1 auto;
  background: ${props => props.theme.palette.primary.contrastText};
  border: 1px solid ${props => props.theme.palette.primary.main};
  padding: 20px;
`

export const CarouselContainer = styled(Carousel)`
  height: 300px;
  width: 400px;
  background: ${props => props.theme.palette.primary.contrastText};
  border-radius: ${props => props.theme.borderRadius};

  .slider,
  .slider-wrapper,
  .carousel.carousel-slider{
    height: 100%;
  }
`

export const Image = styled.img`
  border-radius: ${props => props.theme.borderRadius};
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Title = styled.h4<{light?: boolean}>`
  margin: 20px 0 10px 0;
  font-size: large;
  font-weight: bold;
  padding-bottom: 3px;
  color: ${props => props.light ? props.theme.palette.primary.contrastText : props.theme.palette.primary.main};
  border-bottom: 1px solid ${props => props.light ? props.theme.palette.primary.contrastText : props.theme.palette.primary.main};
`

export const Block = styled.div<{light?: boolean}>`
  display: flex;
  background-color:  ${props => !props.light ? props.theme.palette.primary.contrastText : props.theme.palette.primary.main};
  color: ${props => props.light ? props.theme.palette.primary.contrastText : props.theme.palette.primary.main};
  border-radius: ${props => props.theme.borderRadius};

  box-sizing: border-box;
  padding: 10px 20px;
`

export const Power = styled.p`
  &::first-letter{
    text-transform: uppercase;
  }
`

export const Phrase = styled.blockquote`
  margin: 0;
`