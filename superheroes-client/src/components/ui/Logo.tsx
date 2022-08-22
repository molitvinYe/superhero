import React from "react";
import { Container, Icon, Typography } from "./Logo.styled";
import { Link } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";

const Logo = () => {
  const { page } = useAppSelector((state) => state.pageReduser);

  return (
    <Link to={`/superheroes/${page}`}>
      <Container>
        <Icon />
        <Typography>SuperHeroes</Typography>
      </Container>
    </Link>
  );
};

export default Logo;
