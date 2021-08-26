import { Outlet } from "react-router-dom";

import { Wrapper, Menu, Link } from "./EditProfile.style";

const EditProfile = () => {
  return (
    <>
      <Wrapper>
        <Menu>
          <Link>Informations</Link>
          <Link>Seciurity</Link>
        </Menu>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default EditProfile;
