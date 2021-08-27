import {
  Wrapper,
  Content,
  Logo,
  Form,
  Label,
  Input,
  Box,
  Button,
  Remember,
  Checkbox,
  LinksWrapper,
  StyledLink,
  Image,
} from "./Login.style";

import img from "../../resources/images/login.jpg";

const Login = () => {
  return (
    <>
      <Wrapper>
        <Image img={img} />
        <Content>
          <Logo to="/">Forum</Logo>
          <Form>
            <Label htmlFor="login">Username or Email Address</Label>
            <Input id="login" type="text" />
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
            <Box>
              <Button>Login</Button>
              <Remember>
                <Checkbox type="checkbox" id="checkbox" />
                <Label htmlFor="checkbox">Stay Login</Label>
              </Remember>
            </Box>
          </Form>
          <LinksWrapper>
            <StyledLink to="/signup">Register</StyledLink>
            <StyledLink to="#">Lost your password?</StyledLink>
            <StyledLink to="/">
              <i className="fas fa-arrow-left"></i>Back to forum
            </StyledLink>{" "}
          </LinksWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default Login;
