import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router";

import { Wrapper, Menu, StyledLink } from "./EditProfile.style";
import { useContext } from "react";
import LoggedContext from "../../Context/loggedContext";

const EditProfile = () => {
  const logged = useContext(LoggedContext).logged;

  const { userId } = useParams();

  useEffect(() => {
    if (!logged) document.location.href = "/";
  });
  return (
    <>
      <Wrapper>
        <Menu>
          <StyledLink to={`/profile/${userId}/edit`}>Informations</StyledLink>
          <StyledLink to="seciurity">Seciurity</StyledLink>
        </Menu>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default EditProfile;
