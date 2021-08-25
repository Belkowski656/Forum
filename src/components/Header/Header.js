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

const Header = ({ title, text, type }) => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>Forum</Logo>
        </LogoWrapper>
        <Content>
          <Box>
            <Title>{title}</Title>
            <Text>{text}</Text>
            {type === "forum" || type === "topic" || type === "user" ? (
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
