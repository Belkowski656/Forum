import {
  Wrapper,
  Content,
  Logo,
  Form,
  Label,
  Input,
  Button,
  LinksWrapper,
  Link,
  Image,
} from "./Signup.style";

import img from "../../resources/images/login.jpg";

const Signup = () => {
  return (
    <>
      <Wrapper>
        <Image img={img} />
        <Content>
          <Logo href="#">Forum</Logo>
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
            <Link href="#">
              <i className="fas fa-arrow-left"></i>Back to forum
            </Link>
            <Link href="#">Login</Link>
          </LinksWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default Signup;
