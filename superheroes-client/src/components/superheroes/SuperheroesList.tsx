import React, { useEffect, useState } from "react";
import SuperheroesItem from "./SuperheroesItem";
import { List } from "./Superheroes.styled";
import { ISuperhero } from "../../models/ISuperhero";
import getHeight from "../../functions/getElementHeight";

const SuperheroesList: React.FC<{ superheroes: ISuperhero[] }> = ({
  superheroes,
}) => {
  const [itemHeight, setItemHeight] = useState<string>("340px");

  useEffect(() => {
    const main: HTMLElement | null = document.getElementById("main");
    if (main) {
      const halfHeight = getHeight(main, "half");
      setItemHeight(halfHeight);
    }
    return () => {};
  }, []);

  return (
    <List>
      {superheroes.map((superhero) => {
        return (
          <SuperheroesItem
            key={superhero._id}
            superhero={superhero}
            height={itemHeight}
          />
        );
      })}
    </List>
  );
};

export default SuperheroesList;
