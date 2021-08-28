import styled from "styled-components";
import {
  fontBig,
  fontSmall,
  fontStandard,
  gray,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: ${gray};
  padding: 20px;
`;

export const Bgc = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
`;

export const Close = styled.div`
  text-align: right;
  font-size: ${fontBig};
  cursor: pointer;
`;

export const Text = styled.p`
  padding: 10px 0;
  text-align: center;
`;

export const Error = styled.p`
  padding: 10px 0;
  text-align: center;
  font-size: ${fontSmall};
  color: red;
`;

export const Input = styled.input`
  display: block;
  margin: 50px auto;
  width: 50%;
  height: 50px;
  font-size: ${fontStandard};
  padding: 10px;
  border: 1px solid black;
`;
