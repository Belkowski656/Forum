import { useContext, useEffect, useState } from "react";
import LoggedContext from "../../Context/loggedContext";

import Add from "../Add/Add";
import Answer from "../Answer/Answer";

import {
  Wrapper,
  FirstLine,
  Img,
  Username,
  Date,
  User,
  TextWrapper,
  Text,
  Like,
  Number,
  ReplyWrapper,
  ReplyTo,
  H4,
  LastLine,
} from "./Reply.style";

const Replie = ({
  id,
  title,
  content,
  creatorUsername,
  likes,
  creationDate,
  creatorId,
  answerTo,
  type,
}) => {
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [likesArr, setLikesArr] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [reply, setReply] = useState(false);
  const [answers, setAnswers] = useState([]);

  const logged = useContext(LoggedContext).logged;

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

    const dateObj = new window.Date(creationDate);

    setDate(
      `${
        months[dateObj.getMonth()]
      } ${dateObj.getDate()}, ${dateObj.getFullYear()}`
    );
  }, [creationDate]);

  useEffect(() => {
    const fetchAvatar = async () => {
      const result = await fetch("/fetch-avatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          creatorId,
        }),
      }).then((res) => res.json());
      if (result.status === "ok") {
        setImg(
          require(`../../resources/images/avatars/${result.avatar}`).default
        );
      }
    };

    fetchAvatar();
  }, [creatorId]);

  useEffect(() => {
    const checkIsLiked = async () => {
      if (!logged) return;

      const result = await fetch("/is-liked-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          replyId: id,
          token: sessionStorage.getItem("token"),
        }),
      }).then((res) => res.json());

      if (result.status === "ok") {
        setIsLiked(result.isLiked);
      }
    };

    checkIsLiked();
  }, [likesArr, id, logged]);

  useEffect(() => {
    const checkAnswers = async () => {
      const result = await fetch("/check-answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          replyId: id,
        }),
      }).then((res) => res.json());

      if (result.status === "ok") {
        setAnswers(result.answers);
      }
    };

    checkAnswers();
  }, [id]);

  const toggleLike = async () => {
    if (!logged) return;

    const result = await fetch("/toggle-like-reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        replyId: id,
        token: sessionStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      setLikesArr(result.likes);
    }
  };

  return (
    <>
      {answerTo === "none" || type === "profile" ? (
        <Wrapper>
          <FirstLine>
            <H4>{title}</H4>
            <Date>{date}</Date>
          </FirstLine>
          <User>
            <Img img={img} />
            <Username to={`/profile/${creatorId}`}>{creatorUsername}</Username>
          </User>
          <TextWrapper>
            <Text>{content}</Text>
          </TextWrapper>
          <LastLine>
            {type === "profile" || !logged ? null : (
              <ReplyTo onClick={() => setReply(true)}>Reply</ReplyTo>
            )}
            <Like onClick={() => toggleLike("")} active={isLiked}>
              <i className="fas fa-thumbs-up"></i>
              <Number>{likesArr.length}</Number>
            </Like>
          </LastLine>
        </Wrapper>
      ) : null}
      <ReplyWrapper>
        {reply ? (
          <Add action={"answerToReply"} setReply={setReply} id={id} />
        ) : null}
      </ReplyWrapper>
      {answers.length
        ? answers.map((answer, i) => (
            <Answer
              key={i}
              id={answer._id}
              title={answer.title}
              content={answer.content}
              creationDate={answer.creationDate}
              creatorUsername={answer.creatorUsername}
              creatorId={answer.creatorId}
              likes={answer.likes}
            />
          ))
        : null}
    </>
  );
};

export default Replie;
