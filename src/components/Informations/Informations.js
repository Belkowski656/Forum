import {
  Wrapper,
  Form,
  Label,
  Input,
  Save,
  SmallLabel,
  Text,
  Radio,
  Change,
} from "./Informations.style";

const inputs = [
  {
    name: "Name",
    value: "Example Name",
    type: "text",
  },
  {
    name: "Username",
    value: "Example Username",
    type: "text",
  },
  {
    name: "Date of Birth",
    value: "2001-08-10",
    type: "date",
  },
  {
    name: "Gender",
    value: "male",
    type: "radio",
  },
  {
    name: "Location",
    value: "Poland",
    type: "text",
  },
];

const Informations = () => {
  return (
    <>
      <Wrapper>
        {inputs.map((input, i) => (
          <Form key={i}>
            {input.type === "radio" ? (
              <>
                <Text>{input.name}</Text>{" "}
                <SmallLabel htmlFor="male">
                  <Radio
                    type={input.type}
                    id="male"
                    defaultValue={input.value}
                    name="gender"
                  />{" "}
                  Male
                </SmallLabel>{" "}
                <SmallLabel htmlFor="female">
                  <Radio
                    type={input.type}
                    id="female"
                    defaultValue={input.value}
                    name="gender"
                  />
                  Female
                </SmallLabel>
              </>
            ) : (
              <>
                <Label htmlFor={input.name}>{input.name}</Label>
                <Input
                  type={input.type}
                  id={input.name}
                  defaultValue={input.value}
                />
              </>
            )}
            <Save>Save</Save>
          </Form>
        ))}
        <Form>
          <Text>Avatar</Text>
          <Change type="file" />
          <Save>Save</Save>
        </Form>
      </Wrapper>
    </>
  );
};

export default Informations;
