import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  gray,
  fontHuge,
  fontMedium,
  blue,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  background-color: ${gray};
  color: white;
  text-align: center;
  padding-bottom: 50px;
  @media (min-width: 992px) {
    padding-top: 120px;
  }
`;

export const Empty = styled.div`
  height: 100px;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  text-transform: uppercase;
  font-size: 44px;
  text-decoration: none;
  color: white;
`;

export const Content = styled.div`
  margin: 50px auto 0;
  width: 90%;

  @media (min-width: 992px) {
    width: 40%;
    margin: 0 auto;
  }
`;

export const Box = styled.div``;

export const Title = styled.h2`
  font-size: ${fontHuge};
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin-top: 15px;
  font-size: ${fontMedium};
`;

export const Search = styled.div`
  margin-top: 50px;
  display: flex;
`;

export const Input = styled.input`
  width: calc(100% - 64px);
  height: 64px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  color: white;
  font-size: ${fontMedium};

  :focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  width: 64px;
  height: 64px;
  background-color: ${blue};
  border: none;
  color: white;
  cursor: pointer;

  i {
    font-size: 22px;
  }
`;
