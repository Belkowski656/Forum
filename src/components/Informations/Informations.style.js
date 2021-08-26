import styled from "styled-components";
import {
  blue,
  fontSmall,
  fontStandard,
  gray,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  @media (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
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
  font-size: ${fontStandard};
  font-weight: bold;
  color: ${gray};
  margin-bottom: 20px;
`;

export const SmallLabel = styled.label`
  margin-right: 15px;
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

export const Radio = styled.input`
  padding: 10px;
  margin-right: 5px;

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

export const Change = styled.input`
  visibility: hidden;

  ::before {
    content: "Upload File";
    display: inline-block;
    visibility: visible;
    background-color: ${gray};
    padding: 10px 20px;
    font-size: ${fontSmall};
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
`;
