import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Table from "../Table/Table";

import { TextError, ImgError } from "./TopicsStarted.style";

import img from "../../resources/images/empty.png";

const TopicsStarted = () => {
  const [topics, setTopics] = useState([]);
  const [replies, setReplies] = useState([]);

  const { userId } = useParams();

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

    const fetchAllReplies = async () => {
      const result = await fetch("/fetch-all-replies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());

      if (result.status === "ok") {
        setReplies(result.replies);
      }
    };

    fetchAllReplies();
    fetchTopicsStarted();
  }, [userId]);

  return (
    <>
      {topics.length ? (
        <Table type={"topic"} topics={topics} replies={replies} />
      ) : (
        <>
          <TextError>There is no topic started yet.</TextError>
          <ImgError img={img} />
        </>
      )}
    </>
  );
};

export default TopicsStarted;
