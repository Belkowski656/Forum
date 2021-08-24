import { Wrapper, Content, Title, Text, Button, Image } from "./Register.style";

import img from "../../resources/images/signup.png";

const Register = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Title>Join Our Forum!</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            praesentium dolor, incidunt voluptatum, tempora voluptate pariatur
            iste aliquam, at minima esse saepe perferendis in quisquam repellat.
            Voluptatem veritatis quae nulla!
          </Text>
          <Button>Register Now</Button>
        </Content>
        <Image img={img} />
      </Wrapper>
    </>
  );
};

export default Register;