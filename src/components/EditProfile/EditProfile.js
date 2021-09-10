import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { Wrapper, Menu, StyledLink } from "./EditProfile.style";
import { useContext } from "react";
import LoggedContext from "../../Context/loggedContext";

const EditProfile = () => {
  const logged = useContext(LoggedContext).logged;

  useEffect(() => {
    if (!logged) document.location.href = "/";
  });
  return (
    <>
      <Wrapper>
        <Menu>
          <StyledLink to="/profile/edit">Informations</StyledLink>
          <StyledLink to="seciurity">Seciurity</StyledLink>
        </Menu>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default EditProfile;
