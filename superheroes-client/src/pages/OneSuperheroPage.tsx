import React from "react";
import { useParams } from "react-router-dom";
import { superheroAPI } from "../services/SuperheroService";
import Container from "../components/ui/Container.styled";
import Spinner from "../components/ui/Spinner";
import Superhero from "../components/superhero/Superhero";

const OneSuperheroPage = () => {
  const params = useParams();
  const superheroId = `${params.id}`;
  const { data, isFetching, isLoading, error } =
    superheroAPI.useFetchOneSuperheroQuery(superheroId);

  return (
    <React.Fragment>
      {error && <div>Error</div>}
      {isFetching || isLoading ? (
        <Spinner />
      ) : (
        <>{data && <Superhero details={data}></Superhero>}</>
      )}
    </React.Fragment>
  );
};

export default OneSuperheroPage;
