import { Outlet } from "react-router-dom";

import { Wrapper, Menu, StyledLink } from "./EditProfile.style";

const EditProfile = () => {
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
