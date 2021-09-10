import { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";

import { Wrapper } from "./Forums.style";

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

const Forums = () => {
  const [topics, setTopics] = useState([]);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchTopicsAndReplies = async () => {
      const result = await fetch("/fetch-topics-and-replies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());

      if (result.status === "ok") {
        setTopics(result.topics);
        setReplies(result.replies);
      }
    };

    fetchTopicsAndReplies();
  }, []);

  return (
    <>
      <Navigation />
      <Header
        type={"forum"}
        title={"Welcome To Forum"}
        text={"Internet Forum for Everyone!!!"}
      />
      <Wrapper>
        <Table
          type={"category"}
          categories={categories}
          topics={topics}
          replies={replies}
        />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Forums;
