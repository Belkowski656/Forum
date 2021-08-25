import Informations from "../Informations/Informations";
// import Seciurity from "../Seciurity/Seciurity";

import { Wrapper, Menu, Link } from "./EditProfile.style";

const EditProfile = () => {
  return (
    <>
      <Wrapper>
        <Menu>
          <Link>Informations</Link>
          <Link>Seciurity</Link>
        </Menu>
        <Informations />
        {/* <Seciurity /> */}
      </Wrapper>
    </>
  );
};

export default EditProfile;
