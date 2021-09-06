import { useState, useEffect } from "react";

import Table from "../Table/Table";

import {
  Wrapper,
  StatsBox,
  Box,
  Icon,
  TextWrapper,
  Text,
  Number,
} from "./Main.style";

const categories = [
  {
    name: "Technology",
    link: "technology",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.",
  },
  {
    name: "Gaming",
    link: "gaming",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.",
  },
  {
    name: "Tv & Movies",
    link: "tvmovies",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.",
  },
  {
    name: "Travels",
    link: "travels",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.",
  },
  {
    name: "Sport",
    link: "sport",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.",
  },
  {
    name: "Fitness",
    link: "fitness",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.",
  },
];

const Main = () => {
  const [topics, setTopics] = useState([]);
  const [replies, setReplies] = useState([]);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const fetchTopicsAndRepliesAndUsers = async () => {
      const result = await fetch("/fetch-data").then((res) => res.json());

      if (result.status === "ok") {
        setTopics(result.topics);
        setReplies(result.replies);
        setUsers(result.users);
      }
    };

    fetchTopicsAndRepliesAndUsers();
  }, []);

  return (
    <>
      <Wrapper>
        <StatsBox>
          <Box>
            <Icon>
              <i className="fas fa-users"></i>
            </Icon>
            <TextWrapper>
              <Text>Users</Text>
              <Number>{users}</Number>
            </TextWrapper>
          </Box>
          <Box>
            <Icon>
              <i className="fas fa-bullhorn"></i>
            </Icon>
            <TextWrapper>
              <Text>Topics</Text>
              <Number>{topics.length}</Number>
            </TextWrapper>
          </Box>
          <Box>
            <Icon>
              <i className="fas fa-comment-dots"></i>
            </Icon>
            <TextWrapper>
              <Text>Replies</Text>
              <Number>{replies.length}</Number>
            </TextWrapper>
          </Box>
        </StatsBox>
        <Table
          type={"category"}
          categories={categories}
          topics={topics}
          replies={replies}
        />
      </Wrapper>
    </>
  );
};

export default Main;
