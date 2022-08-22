import React from "react";
import {
  Container,
  Column,
  LeftColumn,
  CarouselContainer,
  Image,
  RightColumn,
  Power,
  Phrase,
  Title,
  Block,
  NavigateRow,
} from "./Superhero.styled";
import { ButtonLink } from "../ui/ButtonLink.styled";
import { ISuperhero } from "../../models/ISuperhero";
import { SERVER_HOST } from "../../store/variables";
import useAppSelector from "../../hooks/useAppSelector";

const Superhero: React.FC<{ details: ISuperhero }> = ({ details }) => {
  const { page } = useAppSelector((state) => state.pageReduser);

  return (
    <Container>
      <LeftColumn>
        <CarouselContainer showThumbs={false}>
          {details.Images &&
            details.Images.map((image) => {
              return <Image key={image} src={`${SERVER_HOST}/${image}`} />;
            })}
        </CarouselContainer>
        <Column>
          <Title light>Nickname</Title>
          <Block>
            <span>{details.nickname}</span>
          </Block>

          <Title light>Real name</Title>
          <Block>
            <span>{details.real_name}</span>
          </Block>
        </Column>
      </LeftColumn>
      <RightColumn>
        <Column>
          <Title>Description</Title>
          <Block light>
            <p>{details.origin_description}</p>
          </Block>

          <Title>Super power</Title>
          <Block light>
            <Power>{details.superpowers}</Power>
          </Block>

          <Title>Catch phrase</Title>
          <Block light>
            <Phrase>{details.catch_phrase}</Phrase>
          </Block>
        </Column>
        <NavigateRow>
          <ButtonLink to={`/superheroes/${page}`}>Back</ButtonLink>
          <ButtonLink to={`/superhero/edit/${details._id}`}>Edit</ButtonLink>
        </NavigateRow>
      </RightColumn>
    </Container>
  );
};

export default Superhero;
