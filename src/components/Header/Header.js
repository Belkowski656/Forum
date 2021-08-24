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
  Empty,
} from "./Header.style";

const Header = ({ title, text }) => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>Forum</Logo>
        </LogoWrapper>
        <Content>
          <Box>
            <Title>{title.length ? title : "Welcome To Forum"}</Title>
            <Text>{text.length ? text : "Internet Forum for Everyone!!!"}</Text>
            {title.length ? (
              <Empty />
            ) : (
              <Search>
                <Input type="text" placeholder="Enter a keyword..." />
                <Button>
                  <i className="fas fa-search"></i>
                </Button>
              </Search>
            )}
          </Box>
        </Content>
      </Wrapper>
    </>
  );
};

export default Header;
