import styled from "styled-components";
import { ReactComponent as SuperheroEl1 } from "../../assets/superheroe1.svg";
import { ReactComponent as SuperheroEl2 } from "../../assets/superheroe2.svg";
import { ReactComponent as SuperheroEl3 } from "../../assets/superheroe3.svg";

export const Container = styled.div`
  margin-left: auto;
  margin-right: 20px;
`

export const SuperheroIcon1 = styled(SuperheroEl1)`
  height: 50px;
`
export const SuperheroIcon2 = styled(SuperheroEl2)`
  height: 50px;
`
export const SuperheroIcon3 = styled(SuperheroEl3)`
  height: 50px;
  margin-right: 5px;
`