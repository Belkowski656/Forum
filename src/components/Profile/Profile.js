import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

import {
  Wrapper,
  SideNav,
  Img,
  Menu,
  MenuElement,
  Link,
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
              <Link>Profile</Link>
            </MenuElement>
            <MenuElement>
              <Link>Topics Started</Link>
            </MenuElement>
            <MenuElement>
              <Link>Replies Created</Link>
            </MenuElement>
            <MenuElement>
              <Link>Edit Profile</Link>
            </MenuElement>
            <MenuElement>
              <Link>Logout</Link>
            </MenuElement>
          </Menu>
        </SideNav>
        <Content>
          <ProfileInfo />
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Profile;
