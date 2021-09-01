import { useEffect, useState } from "react";
import { Wrapper, Close, Text, Input, Bgc, Error } from "./ConfirmPopup.style";

const ConfirmPopup = ({ text, verifyCode, fun }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (code === verifyCode && code !== "") {
      setError("");
      fun();
    } else {
      setError("Verification code is invalid");
    }

    if (code === "") setError("");
  }, [setError, code, fun, verifyCode]);
  return (
    <>
      <Bgc />
      <Wrapper>
        <Close>
          <i className="fas fa-times"></i>
        </Close>
        <Text>{text}</Text>
        <Text>Enter verification code.</Text>
        <Input
          type="text"
          placeholder="Enter Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {error ? <Error>{error}</Error> : null}
      </Wrapper>
    </>
  );
};

export default ConfirmPopup;
