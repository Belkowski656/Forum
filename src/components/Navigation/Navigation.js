import { useState, useContext } from "react";
import LoggedContext from "../../Context/loggedContext";

import {
  Wrapper,
  Content,
  Hamburger,
  Menu,
  MenuElement,
  StyledLink,
  Login,
  Logo,
  User,
  Options,
  Option,
  StyledOption,
} from "./Navigation.style";

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const logged = useContext(LoggedContext).logged;
  const setLogged = useContext(LoggedContext).setLogged;

  const handleClick = (e) => {
    setMenuActive((prev) => !prev);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    setLogged(false);
  };

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
          {logged ? (
            <User onClick={handleClick}>
              <i className="fa fa-user"></i>
              <Options active={menuActive}>
                <Option>
                  <StyledOption to="/profile">Account</StyledOption>
                </Option>
                <Option>
                  <StyledOption onClick={handleLogout} to="/login">
                    Logout
                  </StyledOption>
                </Option>
              </Options>
            </User>
          ) : (
            <Login to="/login">Login</Login>
          )}
        </Content>
      </Wrapper>
    </>
  );
};

export default Navigation;
