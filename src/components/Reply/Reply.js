import { useEffect, useState } from "react";

import {
  Wrapper,
  FirstLine,
  Img,
  Username,
  Date,
  User,
  TextWrapper,
  Text,
  Thumb,
  Like,
  Number,
  Replies,
  Reply,
  H4,
} from "./Reply.style";

const Replie = ({
  id,
  title,
  content,
  creatorUsername,
  likes,
  creationDate,
  creatorId,
}) => {
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [likesArr, setLikesArr] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

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
  }, [likesArr, id]);

  const toggleLike = async () => {
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
        <Thumb>
          <Like onClick={toggleLike} active={isLiked}>
            <i className="fas fa-thumbs-up"></i>
            <Number>{likesArr.length}</Number>
          </Like>
        </Thumb>
      </Wrapper>
      <Replies>
        <Reply>
          <FirstLine>
            <Date>August 5, 2021, 13:45</Date>
          </FirstLine>
          <User>
            <Img img={img} />
            {/* <Username href="#">Example username</Username> */}
          </User>
          <TextWrapper>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              reprehenderit exercitationem veritatis tempora, in pariatur? Quasi
              deleniti perspiciatis adipisci delectus???
            </Text>
          </TextWrapper>
          <Thumb>
            <Like>
              <i className="fas fa-thumbs-up"></i>
              <Number>10</Number>
            </Like>
          </Thumb>
        </Reply>
      </Replies>
    </>
  );
};

export default Replie;
