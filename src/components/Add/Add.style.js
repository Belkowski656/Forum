import styled from "styled-components";
import {
  blue,
  fontBig,
  fontSmall,
  fontStandard,
  gray,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const H2 = styled.h2`
  font-size: ${fontBig};
  color: ${gray};
  margin-bottom: 20px;
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  font-size: ${fontStandard};
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  :focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.9);
  }
`;

export const Text = styled.p`
  color: ${gray};
  font-size: ${fontStandard};
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: ${fontStandard};
  resize: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;

  :focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.9);
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${blue};
  border: none;
  padding: 10px 0;
  color: white;
  font-size: ${fontStandard};
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Error = styled.p`
  font-size: ${fontSmall};
  color: red;
  margin-bottom: 15px;
`;
