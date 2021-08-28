import { useCallback, useEffect, useState } from "react";
import { Wrapper, Close, Text, Input, Bgc, Error } from "./Popup.style";

const Popup = ({ username, email, password, setPopup, verifyCode }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const registerUser = useCallback(async () => {
    console.log("register");
    const result = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      document.location.href = "/login";
    }
  }, [email, password, username]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    if (code === verifyCode && verifyCode !== "") {
      setPopup(false);
      registerUser();
    } else {
      if (code !== "") setError("The verification code is incorrect. ");
    }
  }, [code, registerUser, setPopup, verifyCode]);

  return (
    <>
      <Bgc onClick={() => setPopup(false)} />
      <Wrapper>
        <Close onClick={() => setPopup(false)}>
          <i className="fas fa-times"></i>
        </Close>
        <Text>Verify Code has send to {email}.</Text>
        <Text>Enter verification code.</Text>
        <Input
          type="text"
          placeholder="Enter Code"
          value={code}
          onChange={handleChange}
        />
        {error ? <Error>{error}</Error> : null}
      </Wrapper>
    </>
  );
};

export default Popup;
