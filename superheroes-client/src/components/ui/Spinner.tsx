import React from "react";
import { SpinnerContainer } from "./Spinner.styled";
import { Triangle } from "react-loader-spinner";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Triangle height="120" width="120" color="#726a95" />
    </SpinnerContainer>
  );
};

export default Spinner;
