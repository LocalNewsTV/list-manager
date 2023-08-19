import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)`
  margin: 20pt 10pt 0pt 10pt;
`;
export const ViewContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  min-height: 100svh;
`;

export const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250pt;
  border: 1pt solid black;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`
export const ErrorP = styled.p`
  height: 1.5em;
  padding-top: 0.5em;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #8b0000;
`;

export const StyledHeader = styled.h2`
  margin-top: 1em;
  font-weight: normal;
`;
