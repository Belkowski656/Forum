import styled from "styled-components";
import {
  blue,
  fontSmall,
  fontStandard,
  gray,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  padding: 20px 30px;

  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  } ;
`;

export const Box = styled.div`
  margin-bottom: 20px;
  @media (min-width: 576px) {
    width: 45%;
  } ;
`;

export const Text = styled.p`
  font-size: ${fontStandard};
  font-weight: bold;
  color: ${gray};
  margin-bottom: 20px;
`;

export const Change = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${blue};
  color: white;
  font-size: ${fontSmall};
  font-weight: bold;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  font-size: ${fontStandard};
  font-weight: bold;
  color: ${gray};
  margin-bottom: 20px;
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: ${fontStandard};
  padding: 10px;
  margin-top: 20px;

  :focus {
    outline: none;
  }
`;

export const Save = styled.button`
  padding: 10px 20px;
  background-color: ${gray};
  border: none;
  margin-top: 10px;
  color: white;
  font-size: ${fontSmall};
  font-weight: bold;
  cursor: pointer;
`;

export const Cancel = styled.button`
  padding: 10px 20px;
  background-color: ${gray};
  border: none;
  margin-top: 10px;
  margin-left: 10px;
  color: white;
  font-size: ${fontSmall};
  font-weight: bold;
  cursor: pointer;
`;

export const Radio = styled.input`
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const SmallLabel = styled.label`
  font-size: ${fontStandard};
  color: ${gray};
  margin-left: 10px;
  margin-right: 20px;
  cursor: pointer;
`;

export const AvatarForm = styled.form`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Avatar = styled.input`
  visibility: hidden;

  ::before {
    content: "Upload Avatar";
    display: inline-block;
    visibility: visible;
    margin: 0 auto;
    background-color: ${blue};
    color: white;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
  }
`;

export const Error = styled.p`
  font-size: ${fontSmall};
  color: red;
  margin-top: 10px;
`;

export const InputToken = styled.input`
  visibility: hidden;
`;
