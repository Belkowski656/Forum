import { useContext, useEffect, useState } from "react";
import DataContext from "../../Context/dataContext";

import {
  Wrapper,
  Stats,
  StatBox,
  Icon,
  Informations,
  Info,
  Value,
  Text,
  StatText,
  StatValue,
} from "./ProfileInfo.style";

const ProfileInfo = () => {
  const [creationDate, setCreationDate] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");

  const userData = useContext(DataContext);

  useEffect(() => {
    const date = new Date(userData.dateOfCreation);

    const day =
      date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate();

    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1).toString()
        : date.getMonth() + 1;

    const year = date.getFullYear();

    let userAge = "Unknown";

    if (userData.dateOfBirth !== "Unknown") {
      const dateOfBirth = new Date(userData.dateOfBirth);

      const diff = Date.now() - dateOfBirth.getTime();
      const age = new Date(diff);

      userAge = Math.abs(age.getUTCFullYear() - 1970).toString();
    }

    setCreationDate(`${day}/${month}/${year}`);
    setName(userData.name);
    setAge(userAge);
    setGender(userData.gender);
    setUsername(userData.username);
  }, [userData]);

  return (
    <>
      <Wrapper>
        <Stats>
          <StatBox>
            <Icon>
              <i className="fas fa-calendar-alt"></i>
            </Icon>
            <StatText>Registered</StatText>
            <StatValue>{creationDate}</StatValue>
          </StatBox>
          <StatBox>
            <Icon>
              <i className="fas fa-comments"></i>
            </Icon>
            <StatText>Topics Started</StatText>
            <StatValue>19</StatValue>
          </StatBox>
          <StatBox>
            <Icon>
              <i className="fas fa-comment"></i>
            </Icon>
            <StatText>Replies Created</StatText>
            <StatValue>28</StatValue>
          </StatBox>
        </Stats>
        <Informations>
          <Info>
            <Text>
              Name:<Value>{name}</Value>
            </Text>
          </Info>
          <Info>
            <Text>
              Username:<Value>{username}</Value>
            </Text>
          </Info>
          <Info>
            <Text>
              Age:<Value>{age}</Value>
            </Text>
          </Info>
          <Info>
            <Text>
              Gender:<Value>{gender}</Value>
            </Text>
          </Info>
        </Informations>
      </Wrapper>
    </>
  );
};

export default ProfileInfo;
