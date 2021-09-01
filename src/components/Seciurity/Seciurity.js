import { useState } from "react";

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
  const [verifyCode, setVerifyCode] = useState("");

  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e, type) => {
    e.preventDefault();

    if (type === "email") {
      if (email === "") return setEmailError("Please enter your email");
      else setEmailError("");
    }

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
        <Box>
          <Text>Email</Text>
          {showEmail ? null : (
            <Change onClick={() => setShowEmail(true)}>Change Email</Change>
          )}
          {showEmail ? (
            <Form onSubmit={(e) => handleSubmit(e, "email")}>
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
            <Form onSubmit={(e) => handleSubmit(e, "password")}>
              <Input type="text" placeholder="Current Password" />
              <Input type="text" placeholder="New Password" />
              <Input type="text" placeholder="Retype Password" />
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
