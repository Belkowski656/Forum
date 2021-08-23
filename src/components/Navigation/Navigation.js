import {
  Wrapper,
  Hamburger,
  Menu,
  MenuElement,
  Link,
} from "./Navigation.style";

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <Hamburger />
        <Menu>
          <MenuElement>
            <Link>Home</Link>
          </MenuElement>
          <MenuElement>
            <Link>Forum</Link>
          </MenuElement>
          <MenuElement>
            <Link>Users</Link>
          </MenuElement>
          <MenuElement>
            <Link>FAQ</Link>
          </MenuElement>
          <MenuElement>
            <Link>Contact</Link>
          </MenuElement>
        </Menu>
      </Wrapper>
    </>
  );
};

export default Navigation;
