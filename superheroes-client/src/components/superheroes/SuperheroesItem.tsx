import React from "react";
import { ISuperhero } from "../../models/ISuperhero";
import {
  Item,
  Card,
  Image,
  ImageDescribe,
  ImageContainer,
  Link,
} from "./Superheroes.styled";
import { SERVER_HOST } from "../../store/variables";

interface SuperheroesItemType {
  superhero: ISuperhero;
  height: string;
}

const SuperheroesItem: React.FC<SuperheroesItemType> = ({
  superhero,
  height,
}) => {
  return (
    <Item itemHight={height}>
      <Link to={`/superhero/${superhero._id}`}>
        <Card>
          <ImageContainer>
            {superhero.Images && (
              <Image src={`${SERVER_HOST}/${superhero.Images[0]}`} />
            )}
          </ImageContainer>
          <ImageDescribe>{superhero.nickname}</ImageDescribe>
        </Card>
      </Link>
    </Item>
  );
};

export default SuperheroesItem;
