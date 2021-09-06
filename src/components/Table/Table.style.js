import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  blue,
  fontSmall,
  fontStandard,
  gray,
} from "../../resources/variables/variables";

export const Wrapper = styled.table`
  max-width: 1400px;
  width: 100%;
  margin: 80px auto 0;
  border: 1px solid gray;
  border-collapse: collapse;
  margin-top: ${({ type }) => (type === "user" ? "0" : "80px")};
`;

export const FirstRow = styled.tr`
  border: 1px solid gray;
`;

export const Th = styled.th`
  font-size: ${fontStandard};
  color: ${gray};
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid gray;
  padding: 10px;
`;

export const ThIcon = styled.th`
  font-size: ${fontStandard};
  color: ${gray};
  border: 1px solid gray;
  padding: 10px;

  :nth-child(4) {
    text-align: right;
  }

  :nth-child(3),
  :nth-child(4) {
    display: none;
  }

  @media (min-width: 576px) {
    :nth-child(3),
    :nth-child(4) {
      display: table-cell;
    }
  }
`;

export const Row = styled.tr`
  border: 1px solid gray;
`;

export const Td = styled.td`
  padding: 25px 0;
  border: 1px solid gray;
  padding: 10px;
`;

export const Title = styled(Link)`
  color: ${gray};
  margin-bottom: 10px;
  text-decoration: none;
  font-size: ${fontStandard};
  font-weight: bold;
  transition: 0.2s;

  :hover {
    color: ${blue};
  }
`;

export const Description = styled.p`
  color: #6b717e;
`;

export const TdNumber = styled.td`
  color: #6b717e;
  font-weight: bold;
  font-size: ${fontStandard};
  padding: 40px;
  border: 1px solid gray;
  text-align: center;

  :nth-child(3) {
    display: none;
  }

  @media (min-width: 576px) {
    :nth-child(3) {
      display: table-cell;
    }
  }
`;

export const TdUser = styled.td`
  padding: 40px 10px;
  border: 1px solid gray;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6b717e;
  font-weight: bold;
  font-size: ${fontSmall};
  transition: 0.2s;

  :hover {
    color: ${blue};
  }
`;

export const TdTime = styled.td`
  display: none;
  padding-left: 10px;
  text-align: right;
  color: #6b717e;
  font-size: ${fontSmall};
  padding: 10px;

  @media (min-width: 576px) {
    display: table-cell;
  }
`;
