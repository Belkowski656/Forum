import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Popup from "../Popup/Popup";

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
  Error,
} from "./Signup.style";

import img from "../../resources/images/login.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [popup, setPopup] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [serverError, setServerError] = useState("");

  let schema = yup.object().shape({
    username: yup
      .string("Invalid Format")
      .required("Please enter your Username")
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username must be at most 20 characters"),
    email: yup
      .string("Invalid email. The correct format is example@email.com")
      .email("Invalid email. The correct format is example@email.com")
      .required("Please enter your email"),
    password: yup
      .string(
        '"Password must contain one uppercase, one lowercase, one number and one special case character"'
      )
      .required("Please enter Password")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Pasword must be at most 20 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const { username, email, password } = data;

    const verifyCode = await fetch("/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then((res) => res.json());

    if (verifyCode.status === "error") {
      setServerError(verifyCode.error);
    }

    if (verifyCode.status === "ok") {
      setServerError("");
      setEmail(email);
      setUsername(username);
      setPassword(password);
      setPopup(true);
      setVerifyCode(verifyCode.verifyCode);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) document.location.href = "/";
  });

  return (
    <>
      <Wrapper>
        {popup ? (
          <Popup
            email={email}
            username={username}
            password={password}
            setPopup={setPopup}
            verifyCode={verifyCode}
          />
        ) : null}
        <Image img={img} />
        <Content>
          <Logo to="/">Forum</Logo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" {...register("username")} />
            {errors.username ? <Error>{errors.username.message}</Error> : null}
            <Label htmlFor="login">Email</Label>
            <Input id="email" type="text" {...register("email")} />
            {errors.email ? <Error>{errors.email.message}</Error> : null}
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password ? <Error>{errors.password.message}</Error> : null}
            {serverError ? <Error>{serverError}</Error> : null}
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
