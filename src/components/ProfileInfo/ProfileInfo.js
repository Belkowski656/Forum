import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
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
  const [topics, setTopics] = useState([]);
  const [replies, setReplies] = useState([]);

  const { userId } = useParams();

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

  useEffect(() => {
    const fetchTopicsStarted = async () => {
      const result = await fetch("/fetch-topics-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: sessionStorage.getItem("token"),
          userId,
        }),
      }).then((res) => res.json());

      if (result.status === "ok") {
        setTopics(result.topics);
      }
    };

    const fetchRepliesCreated = async () => {
      const result = await fetch("/fetch-replies-created", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: sessionStorage.getItem("token"),
          userId,
        }),
      }).then((res) => res.json());

      if (result.status === "ok") {
        setReplies(result.replies);
      }
    };

    fetchRepliesCreated();
    fetchTopicsStarted();
  }, [userId]);

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
            <StatValue>{topics.length}</StatValue>
          </StatBox>
          <StatBox>
            <Icon>
              <i className="fas fa-comment"></i>
            </Icon>
            <StatText>Replies Created</StatText>
            <StatValue>{replies.length}</StatValue>
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
