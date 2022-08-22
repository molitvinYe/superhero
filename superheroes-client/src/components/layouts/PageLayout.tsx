import React from "react";
import FullScreenContainer from "../ui/FullScreenWrapper.styled";
import Container from "../ui/Container.styled";
import { Footer, Header, HeaderRow, Main, Author } from "./PageLayout.styles";
import { ButtonLink } from "../ui/ButtonLink.styled";
import Logo from "../ui/Logo";
import SuperheroesIcons from "../ui/SuperheroesIcons";

const PageLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <FullScreenContainer>
      <Header>
        <Container>
          <HeaderRow>
            <Logo />
            <SuperheroesIcons />
            <ButtonLink to="/superhero/create">Create</ButtonLink>
          </HeaderRow>
        </Container>
      </Header>

      <Main id="main">
        <Container>{children}</Container>
      </Main>

      <Footer>
        <Container>
          <Author>Yevhenii Molitvin</Author>
        </Container>
      </Footer>
    </FullScreenContainer>
  );
};

export default PageLayout;
