import React from "react";
import EditSuperheroForm from "../components/superhero/EditSuperheroForm";
import { useParams } from "react-router-dom";
import { superheroAPI } from "../services/SuperheroService";
import Spinner from "../components/ui/Spinner";

const EditSuperheroPage = () => {
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
        <>{data && <EditSuperheroForm initialData={data} />}</>
      )}
    </React.Fragment>
  );
};

export default EditSuperheroPage;
