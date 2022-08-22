import React from "react";
import SuperheroesList from "../components/superheroes/SuperheroesList";
import SuperheroesPagination from "../components/paginate/Paginate";
import { Container } from "../components/superheroes/Superheroes.styled";
import { useParams } from "react-router-dom";
import { superheroAPI } from "../services/SuperheroService";
import { LIMIT } from "../store/variables";
import Spinner from "../components/ui/Spinner";

const AllSuperheroesPage = () => {
  const params = useParams();
  const page = Number(params.page);

  const { data, isFetching, isLoading, error } =
    superheroAPI.useFetchAllSuperheroesQuery({
      page: page,
      limit: LIMIT,
    });

  return (
    <Container>
      {error && <div>Error</div>}
      {isFetching || isLoading ? (
        <Spinner />
      ) : (
        <>
          {data && (
            <React.Fragment>
              <SuperheroesList superheroes={data.superheroes} />
              <SuperheroesPagination
                current={page}
                pageCount={data.pageCount}
              />
            </React.Fragment>
          )}
        </>
      )}
    </Container>
  );
};

export default AllSuperheroesPage;
