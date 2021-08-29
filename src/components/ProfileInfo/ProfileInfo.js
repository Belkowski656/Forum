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

  const userData = useContext(DataContext);

  useEffect(() => {
    const date = new Date(userData.dateOfCreation);

    setCreationDate(
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    );
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
              Name:<Value>Example Name</Value>
            </Text>
          </Info>
          <Info>
            <Text>
              Age:<Value>19</Value>
            </Text>
          </Info>
          <Info>
            <Text>
              Gender:<Value>Female</Value>
            </Text>
          </Info>
          <Info>
            <Text>
              Location:<Value>Poland</Value>
            </Text>
          </Info>
        </Informations>
      </Wrapper>
    </>
  );
};

export default ProfileInfo;
