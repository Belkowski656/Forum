import { useState } from "react";

import {
  Wrapper,
  Content,
  Hamburger,
  Menu,
  MenuElement,
  StyledLink,
  Login,
  Logo,
} from "./Navigation.style";

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <Wrapper>
        <Content>
          <Logo to="/">Forum</Logo>
          <Hamburger
            onClick={() => setHamburger((prev) => !prev)}
            active={hamburger}
          >
            <i className="fas fa-bars"></i>
          </Hamburger>
          <Menu active={hamburger}>
            <MenuElement>
              <StyledLink to="/">Home</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="/forums">Forum</StyledLink>
            </MenuElement>
          </Menu>
          <Login to="/login">Login</Login>
        </Content>
      </Wrapper>
    </>
  );
};

export default Navigation;
