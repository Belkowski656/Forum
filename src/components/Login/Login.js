import { useEffect, useState } from "react";

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
  Error,
} from "./Login.style";

import img from "../../resources/images/login.jpg";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login === "" || password === "") {
      return setError("Plese enter your username or email and password.");
    }

    const result = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        password,
      }),
    }).then((res) => res.json());

    if (result.status === "error") {
      setError(result.error);
    }

    if (result.status === "ok") {
      setError("");
      sessionStorage.setItem("token", result.token);
      document.location.href = "/forums";
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) document.location.href = "/";
  });

  return (
    <>
      <Wrapper>
        <Image img={img} />
        <Content>
          <Logo to="/">Forum</Logo>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="login">Username or Email Address</Label>
            <Input
              id="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box>
              <Button>Login</Button>
              <Remember>
                <Checkbox type="checkbox" id="checkbox" />
                <Label htmlFor="checkbox">Stay Login</Label>
              </Remember>
            </Box>
            {error ? <Error>{error}</Error> : null}
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
