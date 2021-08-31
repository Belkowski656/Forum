import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DataContext from "../../Context/dataContext";

import {
  Wrapper,
  Form,
  InputWrapper,
  Label,
  Input,
  Radio,
  SmallLabel,
  AvatarForm,
  Avatar,
  Save,
  Error,
} from "./Informations.style";

const Informations = () => {
  const [now, setNow] = useState("");
  const userData = useContext(DataContext);

  const schema = yup.object().shape({
    name: yup
      .string("Invalid Value")
      .required("Plese enter your name")
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be at most 20 characters"),
    username: yup
      .string("Invalid Value")
      .required("Plese enter your username")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters"),
    dateOfBirth: yup
      .date("Invalid Value")
      .required("Plese enter your date of birth"),
    gender: yup.string("Invalid Value").required("Plese choose your gender"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              defaultValue={userData.name}
              {...register("name")}
            />
            {errors.name ? <Error>{errors.name.message}</Error> : null}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              defaultValue={userData.username}
              {...register("username")}
            />
            {errors.username ? <Error>{errors.username.message}</Error> : null}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="birth">Date of Birth</Label>
            <Input
              id="birth"
              type="date"
              defaultValue={
                userData.dateOfBirth === "Unknown" ? null : userData.dateOfBirth
              }
              {...register("dateOfBirth")}
              min="1900-01-01"
              max={now}
            />
            {errors.dateOfBirth ? (
              <Error>{errors.dateOfBirth.message}</Error>
            ) : null}
          </InputWrapper>
          <InputWrapper>
            <Label>Gender</Label>
            <Radio
              id="male"
              value="male"
              type="radio"
              name="gender"
              {...register("gender")}
              defaultChecked={userData.gender === "male" ? true : false}
            />
            <SmallLabel htmlFor="male">Male</SmallLabel>
            <Radio
              id="female"
              value="female"
              type="radio"
              name="gender"
              {...register("gender")}
              defaultChecked={userData.gender === "female" ? true : false}
            />
            <SmallLabel htmlFor="female">Female</SmallLabel>
            {errors.gender ? <Error>{errors.gender.message}</Error> : null}
          </InputWrapper>
          <Save>Update Profile</Save>
        </Form>
        <AvatarForm>
          <Label htmlFor="avatar">Avatar</Label>
          <Avatar id="avatar" type="file" />
        </AvatarForm>
      </Wrapper>
    </>
  );
};

export default Informations;
