import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  blue,
  fontSmall,
  gray,
  lightGrayFont,
  fontStandard,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  color: ${lightGrayFont};
  max-width: 800px;
  width: 90%;
  margin-left: auto;
  margin-bottom: 50px;
`;

export const FirstLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

export const H4 = styled.h4`
  font-size: ${fontStandard};
  font-weight: bold;
  text-transform: uppercase;
  color: ${gray};
`;

export const Date = styled.p`
  margin-top: 15px;
  font-size: ${fontSmall};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
`;

export const Img = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  border-radius: 50%;
`;

export const Username = styled(Link)`
  color: ${gray};
  font-weight: bold;
  text-decoration: none;
  margin-left: 20px;
  transition: 0.2s;

  :hover {
    color: ${blue};
  }
`;

export const TextWrapper = styled.div`
  padding: 50px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
`;

export const Text = styled.p`
  line-height: 200%;
  text-align: justify;
`;

export const LastLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
`;

export const Like = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  color: ${({ active }) => (active ? blue : gray)};
  margin-right: 10px;
  transition: 0.2s;
  cursor: pointer;

  i {
    margin-right: 5px;
  }

  :hover {
    color: ${blue};
  }
`;

export const Number = styled.p`
  font-weight: bold;
`;
