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
  }
`;

export const Form = styled.form`
  padding: 20px 30px;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: ${fontStandard};
  font-weight: bold;
  color: ${gray};
  margin-bottom: 20px;
`;

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

  :focus {
    outline: none;
  }
`;

export const Save = styled.button`
  display: block;
  margin-top: 20px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
  }
`;
