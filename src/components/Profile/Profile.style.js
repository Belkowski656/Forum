import styled from "styled-components";
import { Link } from "react-router-dom";
import { blue, fontStandard, gray } from "../../resources/variables/variables";

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const SideNav = styled.nav`
  border: 1px solid rgba(0, 0, 0, 0.3);

  @media (min-width: 992px) {
    width: 25%;
  }
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

export const StyledLink = styled(Link)`
  display: block;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  font-size: ${fontStandard};
  transition: 0.2s;
  cursor: pointer;
  color: ${gray};
  text-decoration: none;

  :hover {
    color: ${blue};
  }
`;

export const Content = styled.div`
  margin-top: 50px;

  @media (min-width: 992px) {
    margin: 0;
    width: 70%;
  }
`;
