import { Link } from "react-router-dom";
import styled from "styled-components";
import { blue, fontMedium } from "../../resources/variables/variables";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Text = styled.p`
  font-size: ${fontMedium};
  text-align: center;
  margin-top: 50px;
  width: 100%;
`;

export const Img = styled.div`
  background-image: url(${({ img }) => img});
  width: 300px;
  height: 300px;
  background-size: contain;
  margin: 50px auto;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid black;
`;

export const Login = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: ${blue};
  padding: 10px 20px;
  font-weight: bold;
  margin-top: 20px;
`;
