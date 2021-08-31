import styled from "styled-components";
import {
  blue,
  fontSmall,
  fontStandard,
  gray,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  padding: 20px 30px;
`;

export const Form = styled.form`
  @media (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  @media (min-width: 576px) {
    width: 45%;
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
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

export const Radio = styled.input`
  display: inline-block;
  padding: 5px;
  cursor: pointer;
`;

export const SmallLabel = styled.label`
  font-size: 16px;
  color: ${gray};
  margin-left: 5px;
  margin-right: 20px;
  cursor: pointer;
`;

export const Save = styled.button`
  display: block;
  font-size: ${fontStandard};
  color: white;
  background-color: ${blue};
  border: none;
  padding: 10px 20px;
  margin: 20px auto 0;
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
    background-color: ${gray};
    color: white;
    padding: 15px 25px;
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
