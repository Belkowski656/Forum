import styled from "styled-components";
import {
  fontSmall,
  blue,
  gray,
  fontStandard,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  @media (min-width: 576px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Form = styled.form``;

export const Text = styled.p`
  display: block;
  font-size: ${fontStandard};
  font-weight: bold;
  color: ${gray};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: ${fontStandard};
  padding: 10px;
  margin-bottom: 10px;

  :focus {
    outline: none;
  }
`;

export const Save = styled.button`
  margin-top: 20px;
  margin-right: 20px;
  padding: 10px 20px;
  font-size: ${fontSmall};
  font-weight: bold;
  color: white;
  background-color: ${gray};
  border: none;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: ${blue};
  }
`;

export const Cancel = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: ${fontSmall};
  font-weight: bold;
  color: white;
  background-color: ${gray};
  border: none;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: ${blue};
  }
`;

export const Change = styled.button`
  padding: 10px 20px;
  font-size: ${fontSmall};
  font-weight: bold;
  color: white;
  background-color: ${blue};
  border: none;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: ${gray};
  }
`;

export const Box = styled.div`
  padding: 20px 30px;
  @media (min-width: 576px) {
    width: 45%;
  }
`;

export const Error = styled.p`
  font-size: ${fontSmall};
  color: red;
  margin-bottom: 10px;
`;
