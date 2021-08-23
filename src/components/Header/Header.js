import {
  Wrapper,
  LogoWrapper,
  Logo,
  Content,
  Box,
  Title,
  Text,
  Search,
  Input,
  Button,
} from "./Header.style";

const Header = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>Forum</Logo>
        </LogoWrapper>
        <Content>
          <Box>
            <Title>Welcome To Forum</Title>
            <Text>Internet Forum for Everyone!!!</Text>
            <Search>
              <Input type="text" placeholder="Enter a keyword..." />
              <Button>
                <i className="fas fa-search"></i>
              </Button>
            </Search>
          </Box>
        </Content>
      </Wrapper>
    </>
  );
};

export default Header;
