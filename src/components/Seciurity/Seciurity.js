import {
  Wrapper,
  Form,
  Label,
  Input,
  Save,
  Box,
  Text,
} from "../Seciurity/Seciurity.style";

const Seciurity = () => {
  return (
    <>
      <Wrapper>
        <Form>
          <Label htmlFor="email">Email</Label>
          <Input type="text" defaultValue="exampe@gmail.com" id="email" />
          <Save>Save</Save>
        </Form>
        <Box>
          <Text>Password</Text>
          <Save>Change Password</Save>
        </Box>
      </Wrapper>
    </>
  );
};

export default Seciurity;
