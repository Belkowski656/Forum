import { useParams } from "react-router";
import { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Reply from "../Reply/Reply";

import {
  Wrapper,
  Post,
  FirstLine,
  H4,
  Date,
  User,
  Img,
  Username,
  TextWrapper,
  Text,
  Thumb,
  Like,
  Number,
  Replies,
  RepliesTitle,
} from "./Topic.style";

const Topic = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [avatar, setAvatar] = useState("");

  const { topicId } = useParams();

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const fetchTopic = async () => {
      const result = await fetch("/fetch-topic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicId,
        }),
      }).then((res) => res.json());

      if (result.status === "ok") {
        const creationDate = new window.Date(result.topic.creationDate);

        setTitle(result.topic.title);
        setContent(result.topic.content);
        setUsername(result.topic.creatorUsername);
        setLikes(result.topic.likes);
        setId(result.topic.creatorId);
        setAvatar(
          require(`../../resources/images/avatars/${result.avatar}`).default
        );

        setDate(
          `${
            months[creationDate.getMonth()]
          } ${creationDate.getDate()}, ${creationDate.getFullYear()}`
        );
      }
    };

    fetchTopic();
  }, [topicId]);

  useEffect(() => {
    const checkIsLiked = async () => {
      const result = await fetch("/is-liked", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicId,
          token: sessionStorage.getItem("token"),
        }),
      }).then((res) => res.json());

      if (result.status === "ok") {
        setIsLiked(result.isLiked);
      }
    };

    checkIsLiked();
  }, [likes, topicId]);

  const toggleLike = async () => {
    const result = await fetch("/toggle-like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topicId,
        token: sessionStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      setLikes(result.likes);
    }
  };

  return (
    <>
      <Navigation />
      <Header type={"topic"} title={title} text={""} />
      <Wrapper>
        <Post>
          <FirstLine>
            <H4>{title}</H4>
            <Date>{date}</Date>
          </FirstLine>
          <User>
            <Img img={avatar} />
            <Username href="#">{username}</Username>
          </User>
          <TextWrapper>
            <Text>{content}</Text>
          </TextWrapper>
          <Thumb>
            <Like onClick={toggleLike} active={isLiked}>
              <i className="fas fa-thumbs-up"></i>
              <Number>{likes.length}</Number>
            </Like>
          </Thumb>
        </Post>
        <RepliesTitle>Replies</RepliesTitle>
        <Replies>
          <Reply />
        </Replies>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Topic;
