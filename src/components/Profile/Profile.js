import { Outlet } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
  Wrapper,
  SideNav,
  Img,
  Menu,
  MenuElement,
  StyledLink,
  Content,
} from "./Profile.style";

import img from "../../resources/images/login.jpg";

const Profile = () => {
  return (
    <>
      <Navigation />
      <Header
        type="user"
        title={"Example username"}
        text={"User description"}
      />
      <Wrapper>
        <SideNav>
          <Img img={img} />
          <Menu>
            <MenuElement>
              <StyledLink to="/profile">Profile</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="topics">Topics Started</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="replies">Replies Created</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="edit">Edit Profile</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="/login">Logout</StyledLink>
            </MenuElement>
          </Menu>
        </SideNav>
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Profile;
