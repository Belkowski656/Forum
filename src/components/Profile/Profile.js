import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

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

const Profile = () => {
  const [image, setImage] = useState("");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
  };

  const fetchUserData = async () => {
    const result = await fetch("/fetch-user-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      setImage(result.data.avatar);
    }
  };

  useEffect(fetchUserData);

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
          <Img img={image} />
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
              <StyledLink onClick={handleLogout} to="/login">
                Logout
              </StyledLink>
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
