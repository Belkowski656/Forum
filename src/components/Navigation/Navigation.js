import { useState } from "react";

import {
  Wrapper,
  Content,
  Hamburger,
  Menu,
  MenuElement,
  Link,
  Login,
  Logo,
} from "./Navigation.style";

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <Wrapper>
        <Content>
          <Logo>Forum</Logo>
          <Hamburger
            onClick={() => setHamburger((prev) => !prev)}
            active={hamburger}
          >
            <i className="fas fa-bars"></i>
          </Hamburger>
          <Menu active={hamburger}>
            <MenuElement>
              <Link>Home</Link>
            </MenuElement>
            <MenuElement>
              <Link>Forum</Link>
            </MenuElement>
          </Menu>
          <Login>Login</Login>
        </Content>
      </Wrapper>
    </>
  );
};

export default Navigation;
