import styled from "styled-components";
import { blue, gray } from "../../resources/variables/variables";

export const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Menu = styled.nav`
  display: flex;
`;

export const Link = styled.a`
  width: 50%;
  padding: 10px 15px;
  text-align: center;
  font-weight: bold;
  color: ${gray};

  :nth-child(1) {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  :hover {
    color: ${blue};
  }
`;
