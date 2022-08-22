import styled from "styled-components";
import Modal  from "react-modal";

export const Form = styled.form`
  display: flex;
  flex: 1 1 auto;
`

export const ModalBlock = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.palette.primary.main};
  background: ${props => props.theme.palette.primary.contrastText};
`

export const FormButton = styled.button`
  cursor: pointer;
  align-self: center;
  padding: 10px 50px;

  text-transform: uppercase;
  font-size: larger;
  letter-spacing: 5px;
  color: ${props => props.theme.palette.secondary.contrastText};
  background-color: ${props => props.theme.palette.secondary.main};

  border: 1px solid ${props => props.theme.palette.secondary.contrastText};
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    color: ${props => props.theme.palette.primary.contrastText};
    background-color: ${props => props.theme.palette.primary.main};
    border: 1px solid ${props => props.theme.palette.primary.contrastText};
  }
`

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px 20px;
  background-blend-mode: overlay;
  background: inherit;
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border: 1px solid ${props => props.theme.palette.primary.contrastText};
  flex: 1 1 auto;
  color: ${props => props.theme.palette.primary.main};

  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.palette.primary.main};
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  height: 300px;
  width: 400px;
  background: ${props => props.theme.palette.primary.contrastText};
  border-radius: ${props => props.theme.borderRadius};
`

export const ImagesUpload = styled(Input)`
  cursor: pointer; 
  margin-top: 10px;
  flex: 0 0 auto;
`

export const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px 20px;
  background-blend-mode: overlay;
  background: inherit;
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border: 1px solid ${props => props.theme.palette.primary.main};
  flex: 1 1 auto;
  resize: none;
  min-height: 80px;
  color: ${props => props.theme.palette.primary.contrastText};

  ::placeholder {
    color: ${props => props.theme.palette.primary.contrastText};
  }

  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.palette.primary.contrastText};
  }
`;