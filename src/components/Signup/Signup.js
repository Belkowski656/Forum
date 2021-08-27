import {
  Wrapper,
  Content,
  Logo,
  Form,
  Label,
  Input,
  Button,
  LinksWrapper,
  StyledLink,
  Image,
} from "./Signup.style";

import img from "../../resources/images/login.jpg";

const Signup = () => {
  return (
    <>
      <Wrapper>
        <Image img={img} />
        <Content>
          <Logo to="/">Forum</Logo>
          <Form>
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" />
            <Label htmlFor="login">Email</Label>
            <Input id="email" type="email" />
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
            <Button>Register</Button>
          </Form>
          <LinksWrapper>
            <StyledLink to="/">
              <i className="fas fa-arrow-left"></i>Back to forum
            </StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </LinksWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default Signup;
