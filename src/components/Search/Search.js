import { useParams } from "react-router";
import { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Table from "../Table/Table";

import { Wrapper, Box } from "./Search.style";

const Search = () => {
  const [topics, setTopics] = useState([]);
  const [replies, setReplies] = useState([]);

  const { keyword } = useParams();

  useEffect(() => {
    const fetchTopicsAndReplies = async () => {
      const result = await fetch("/fetch-topics-and-replies").then((res) =>
        res.json()
      );

      if (result.status === "ok") {
        const topicsMatchingKeyword = result.topics.filter((topic) =>
          topic.title.includes(keyword)
        );
        console.log(result.topics);
        console.log(topicsMatchingKeyword);
        setTopics(topicsMatchingKeyword);
        setReplies(result.replies);
      }
    };

    fetchTopicsAndReplies();
  }, [keyword]);

  return (
    <>
      <Navigation />
      <Header
        title={keyword}
        text={`Results for keyword "${keyword}"`}
        type={"search"}
      />
      <Wrapper>
        <Table type={"topic"} topics={topics} replies={replies} />
      </Wrapper>
      <Box />
      <Footer />
    </>
  );
};

export default Search;
