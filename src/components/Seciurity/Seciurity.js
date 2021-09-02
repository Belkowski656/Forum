import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ConfirmPopup from "../ConfirmPopup/ConfirmPopup";

import {
  Wrapper,
  Form,
  Input,
  Save,
  Cancel,
  Box,
  Text,
  Change,
  Error,
} from "../Seciurity/Seciurity.style";

const Seciurity = () => {
  const [popupEmail, setPopupEmail] = useState(false);
  const [popupPassword, setPopupPassword] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const handleEmail = async (e) => {
    e.preventDefault();

    if (email === "") return setEmailError("Please enter your email");
    else setEmailError("");

    const result = await fetch("/confirm-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    }).then((res) => res.json());

    if (result.status === "error") {
      setEmailError(result.message);
    }

    if (result.status === "ok") {
      setVerifyCode(result.verifyCode);
      setPopupEmail(true);
    }
  };

  const changeEmail = async () => {
    const result = await fetch("/change-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        email,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      setPopupEmail(false);
      setShowEmail(false);
      setEmail("");
      alert("Your email has been changed");
      window.location.reload(false);
    }
  };

  const changePassword = async () => {
    const result = await fetch("/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        newPassword,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      setPopupPassword(false);
      setShowPassword(false);
      setNewPassword("");
      alert("Your password has been changed");
      window.location.reload(false);
    }
  };

  let schema = yup.object().shape({
    currentPassword: yup
      .string(
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      )
      .required("Please enter your current password"),
    newPassword: yup
      .string(
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      )
      .required("Please enter new password")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Pasword must be at most 20 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      ),
    newPasswordRetype: yup
      .string(
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      )
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  });

  const handleChange = async (data) => {
    const result = await fetch("/confirm-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      }),
    }).then((res) => res.json());

    if (result.status === "error") {
      setError(result.message);
    }

    if (result.status === "ok") {
      setNewPassword(result.newPassword);
      setPopupPassword(true);
      setVerifyCode(result.verifyCode);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <Wrapper>
        {popupEmail ? (
          <ConfirmPopup
            verifyCode={verifyCode}
            text="Verify Code has send to your old Email."
            fun={changeEmail}
          />
        ) : null}
        {popupPassword ? (
          <ConfirmPopup
            verifyCode={verifyCode}
            text="Verify Code has send to your Email."
            fun={changePassword}
          />
        ) : null}
        <Box>
          <Text>Email</Text>
          {showEmail ? null : (
            <Change onClick={() => setShowEmail(true)}>Change Email</Change>
          )}
          {showEmail ? (
            <Form onSubmit={handleEmail}>
              <Input
                type="email"
                placeholder="Enter your new email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError ? <Error>{emailError}</Error> : null}
              <Save>Save</Save>
              <Cancel
                onClick={() => {
                  setShowEmail(false);
                  setEmailError("");
                }}
                type="button"
              >
                Cancle
              </Cancel>
            </Form>
          ) : null}
        </Box>
        <Box>
          <Text>Password</Text>
          {showPassword ? null : (
            <Change onClick={() => setShowPassword(true)}>
              Change Password
            </Change>
          )}
          {showPassword ? (
            <Form onSubmit={handleSubmit(handleChange)}>
              <Input
                type="password"
                placeholder="Current Password"
                {...register("currentPassword")}
              />
              {errors.currentPassword ? (
                <Error>{errors.currentPassword.message}</Error>
              ) : null}
              <Input
                type="password"
                placeholder="New Password"
                {...register("newPassword")}
              />
              {errors.newPassword ? (
                <Error>{errors.newPassword.message}</Error>
              ) : null}
              <Input
                type="password"
                placeholder="Retype Password"
                {...register("newPasswordRetype")}
              />
              {errors.newPasswordRetype ? (
                <Error>{errors.newPasswordRetype.message}</Error>
              ) : null}
              {error ? <Error>{error}</Error> : null}
              <Save>Save</Save>
              <Cancel onClick={() => setShowPassword(false)} type="button">
                Cancle
              </Cancel>
            </Form>
          ) : null}
        </Box>
      </Wrapper>
    </>
  );
};

export default Seciurity;
