import { useContext } from "react";

import { Wrapper, Content, Title, Text, Button, Image } from "./Register.style";

import img from "../../resources/images/signup.png";
import LoggedContext from "../../Context/loggedContext";

const Register = () => {
  const logged = useContext(LoggedContext).logged;

  return (
    <>
      {logged ? null : (
        <Wrapper>
          <Content>
            <Title>Join Our Forum!</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              praesentium dolor, incidunt voluptatum, tempora voluptate pariatur
              iste aliquam, at minima esse saepe perferendis in quisquam
              repellat. Voluptatem veritatis quae nulla!
            </Text>
            <Button to="/signup">Register Now</Button>
          </Content>
          <Image img={img} />
        </Wrapper>
      )}
    </>
  );
};

export default Register;
