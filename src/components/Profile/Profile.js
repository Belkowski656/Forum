import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState, useContext, useCallback } from "react";

import { DataProvider } from "../../Context/dataContext";
import LoggedContext from "../../Context/loggedContext";

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
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [userData, setuserData] = useState("");

  const { userId } = useParams();

  const setLogged = useContext(LoggedContext).setLogged;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    setLogged(false);
  };

  const fetchUserData = useCallback(async () => {
    const result = await fetch("/fetch-user-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        userId,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      setImage(
        require(`../../resources/images/avatars/${result.data.avatar}`).default
      );
      setUsername(result.data.username);
      setuserData(result.data);
    }
  }, [userId]);

  useEffect(() => fetchUserData(), [fetchUserData]);

  return (
    <>
      <Navigation />
      <Header type="user" title={username} text={""} />
      <Wrapper>
        <SideNav>
          <Img img={image} />
          <Menu>
            <MenuElement>
              <StyledLink to={`/profile/${userId}`}>Profile</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="topics">Topics Started</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="replies">Replies Created</StyledLink>
            </MenuElement>
            {userId === "ok" ? (
              <>
                <MenuElement>
                  <StyledLink to="edit">Edit Profile</StyledLink>
                </MenuElement>
                <MenuElement>
                  <StyledLink onClick={handleLogout} to="/login">
                    Logout
                  </StyledLink>
                </MenuElement>
              </>
            ) : null}
          </Menu>
        </SideNav>
        <Content>
          <DataProvider value={userData}>
            <Outlet />
          </DataProvider>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Profile;
