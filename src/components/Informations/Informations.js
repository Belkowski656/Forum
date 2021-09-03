import { useEffect, useState } from "react";

import {
  Wrapper,
  Form,
  Label,
  Input,
  Radio,
  SmallLabel,
  Avatar,
  Save,
  Error,
  Box,
  Text,
  Change,
  Cancel,
  InputToken,
} from "./Informations.style";

const Informations = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const [showName, setShowName] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [showDateOfBirth, setShowDateOfBirth] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showFile, setShowFile] = useState(false);

  const [now, setNow] = useState("");

  const handleSubmit = async (e, type) => {
    e.preventDefault();

    let value = "";

    if (type === "name") {
      if (name === "") return setNameError("Please enter your name");
      else setNameError("");

      if (name.length < 4)
        return setNameError("Name must be at least 4 characters");
      else setNameError("");

      if (name.length > 20)
        return setNameError("Name must be at most 20 characters");
      else setNameError("");

      value = name;
    }

    if (type === "username") {
      if (username === "")
        return setUsernameError("Please enter your username");
      else setUsernameError("");

      if (username.length < 4)
        return setUsernameError("Username must be at least 4 characters");
      else setUsernameError("");

      if (username.length > 20)
        return setUsernameError("Username must be at most 20 characters");
      else setUsernameError("");

      value = username;
    }

    if (type === "dateOfBirth") {
      if (dateOfBirth === "")
        return setDateOfBirthError("Please enter your date Of Birth");
      else setDateOfBirthError("");

      value = dateOfBirth;
    }

    if (type === "gender") {
      if (gender === "") return setGenderError("Plese choose your gender");
      else setGenderError("");

      value = gender;
    }

    const result = await fetch("/change", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        type,
        value,
      }),
    }).then((res) => res.json());

    if (type === "name") {
      setShowName(false);
      setName("");
      alert("Your name has been changed");
      window.location.reload(false);
    }

    if (type === "username") {
      if (result.status === "duplication") {
        return setUsernameError(`"${value}" is already in use`);
      }
      setShowUsername(false);
      setUsername("");
      setUsernameError(``);
      alert("Your username has been changed");
      window.location.reload(false);
    }

    if (type === "dateOfBirth") {
      setShowDateOfBirth(false);
      setDateOfBirth("");
      alert("Your date of birth has been changed");
      window.location.reload(false);
    }

    if (type === "gender") {
      setShowGender(false);
      setGender("");
      alert("Your gender has been changed");
      window.location.reload(false);
    }
  };

  useEffect(() => {
    const now = new Date();

    const year = now.getFullYear();
    const month =
      now.getMonth() + 1 < 10
        ? "0" + (now.getMonth() + 1).toString()
        : now.getMonth();
    const day =
      now.getDate() < 10 ? "0" + now.getDate().toString() : now.getDate();

    setNow(`${year}-${month}-${day}`);
  }, []);

  return (
    <>
      <Wrapper>
        <Box>
          <Text>Name</Text>
          {showName ? null : (
            <Change onClick={() => setShowName(true)}>Change</Change>
          )}
          {showName ? (
            <Form onSubmit={(e) => handleSubmit(e, "name")}>
              <Input
                type="text"
                placeholder="Enter your new name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {nameError ? <Error>{nameError}</Error> : null}
              <Save>Save</Save>
              <Cancel
                onClick={() => {
                  setShowName(false);
                  setNameError("");
                }}
              >
                Cancel
              </Cancel>
            </Form>
          ) : null}
        </Box>
        <Box>
          <Text>Username</Text>
          {showUsername ? null : (
            <Change onClick={() => setShowUsername(true)}>Change</Change>
          )}
          {showUsername ? (
            <Form onSubmit={(e) => handleSubmit(e, "username")}>
              <Input
                type="text"
                placeholder="Enter your new username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              {usernameError ? <Error>{usernameError}</Error> : null}
              <Save>Save</Save>
              <Cancel
                onClick={() => {
                  setShowUsername(false);
                  setUsernameError("");
                }}
              >
                Cancel
              </Cancel>
            </Form>
          ) : null}
        </Box>
        <Box>
          <Text>Date of Birth</Text>
          {showDateOfBirth ? null : (
            <Change onClick={() => setShowDateOfBirth(true)}>Change</Change>
          )}
          {showDateOfBirth ? (
            <Form onSubmit={(e) => handleSubmit(e, "dateOfBirth")}>
              <Input
                type="date"
                value={dateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
                min="1900-01-01"
                max={now}
              />
              {dateOfBirthError ? <Error>{dateOfBirthError}</Error> : null}
              <Save>Save</Save>
              <Cancel
                onClick={() => {
                  setShowDateOfBirth(false);
                  setDateOfBirthError("");
                }}
              >
                Cancel
              </Cancel>
            </Form>
          ) : null}
        </Box>
        <Box>
          <Text>Gender</Text>
          {showGender ? null : (
            <Change onClick={() => setShowGender(true)}>Change</Change>
          )}
          {showGender ? (
            <Form onSubmit={(e) => handleSubmit(e, "gender")}>
              <div>
                <Radio
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  checked={gender === "male" ? true : false}
                />
                <SmallLabel htmlFor="male">Male</SmallLabel>
                <Radio
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  checked={gender === "female" ? true : false}
                />
                <SmallLabel htmlFor="female">Female</SmallLabel>
              </div>
              {genderError ? <Error>{genderError}</Error> : null}
              <Save>Save</Save>
              <Cancel
                onClick={() => {
                  setShowGender(false);
                  setGenderError("");
                }}
              >
                Cancel
              </Cancel>
            </Form>
          ) : null}
        </Box>
        <Box>
          <Form
            action="/change-avatar"
            method="POST"
            encType="multipart/form-data"
          >
            <Label htmlFor="avatar">Avatar</Label>
            <Avatar
              id="avatar"
              name="avatar"
              accept="image/*"
              type="file"
              onClick={() => setShowFile(true)}
            />
            <InputToken
              type="text"
              defaultValue={sessionStorage.getItem("token")}
              name="token"
            />
            <div>
              {showFile ? <Save>Save</Save> : null}
              {showFile ? (
                <Cancel onClick={() => setShowFile(false)}>Cancle</Cancel>
              ) : null}
            </div>
          </Form>
        </Box>
      </Wrapper>
    </>
  );
};

export default Informations;
