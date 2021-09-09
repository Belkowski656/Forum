import { useState } from "react";

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
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!search) return setError(true);
    setError(false);
    document.location.href = `/search/${search}`;
  };

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo to="/">Forum</Logo>
        </LogoWrapper>
        <Content>
          <Box>
            <Title>{title}</Title>
            <Text>{text}</Text>
            {type === "forum" ||
            type === "topic" ||
            type === "user" ||
            type === "search" ? (
              <Empty />
            ) : (
              <Search>
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Enter a keyword..."
                  error={error}
                />
                <Button onClick={handleSearch}>
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
