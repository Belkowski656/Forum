import styled from "styled-components";

import { blue, gray, fontStandard } from "../../resources/variables/variables";

export const Wrapper = styled.div`
  background-color: ${blue};
  color: white;
  padding: 20px;

  @media (min-width: 992px) {
    background-color: ${gray};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: bold;
  }
`;

export const Hamburger = styled.div`
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 20px);
  left: -20px;
  width: calc(100% + 40px);
  padding: 0 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  list-style: none;
  background-color: ${blue};
  max-height: ${({ active }) => (active ? "220px" : "0")};
  transition: 0.2s;
  overflow: hidden;

  @media (min-width: 992px) {
    position: static;
    display: flex;
    justify-content: flex-end;
    border: none;
    width: 100%;
    max-height: none;
    padding: 0;
    background-color: transparent;
    margin-right: 20px;
  }
`;

export const MenuElement = styled.li``;

export const Link = styled.a`
  display: block;
  padding: 10px 0;
  font-size: ${fontStandard};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;

  @media (min-width: 992px) {
    margin: 0 20px;

    :hover {
      color: ${blue};
    }
  }
`;

export const Login = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  @media (min-width: 992px) {
    background-color: ${blue};
    padding: 10px 20px;

    :hover {
      background-color: #17698f;
    }
  }
`;
