import styled from "styled-components";
import { blue, fontStandard, gray } from "../../resources/variables/variables";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const SideNav = styled.nav`
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Img = styled.div`
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 120px;
  background-size: cover;
  margin: 20px auto;
  border-radius: 50%;
`;

export const Menu = styled.ul`
  list-style: none;
  color: ${gray};
`;

export const MenuElement = styled.li``;

export const Link = styled.a`
  display: block;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  font-size: ${fontStandard};
  transition: 0.2s;

  :hover {
    color: ${blue};
  }
`;

export const Content = styled.div``;
