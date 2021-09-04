import { useCallback, useState, useEffect, useContext } from "react";
import { useParams } from "react-router";

import LoggedContext from "../../Context/loggedContext";

import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import Add from "../Add/Add";

import { Wrapper, Text, Img, Login, Box } from "./Forum.style";

import img from "../../resources/images/empty.png";

const Forum = () => {
  const [topics, setTopics] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { category } = useParams();
  const logged = useContext(LoggedContext).logged;

  const fetchTopics = useCallback(async () => {
    const result = await fetch("/fetch-topics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: category,
      }),
    }).then((res) => res.json());
    if (result.status === "ok") {
      setTopics(result.topics);
    }
  }, [category]);

  useEffect(() => {
    if (category === "technology") {
      setTitle("Technology");
      setDescription(
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.y"
      );
    } else if (category === "gaming") {
      setTitle("Gaming");
      setDescription(
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.y"
      );
    } else if (category === "tvmovies") {
      setTitle("Tv & Movies");
      setDescription(
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.y"
      );
    } else if (category === "travels") {
      setTitle("Travels");
      setDescription(
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.y"
      );
    } else if (category === "sport") {
      setTitle("Sport");
      setDescription(
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.y"
      );
    } else if (category === "fitness") {
      setTitle("Fitness");
      setDescription(
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci.y"
      );
    }
  }, [category]);

  useEffect(() => {
    fetchTopics();
  }, [category, fetchTopics]);

  return (
    <>
      <Navigation />
      <Header title={title} text={description} />
      <Wrapper>
        {topics.length ? (
          <Table type={"topic"} topics={topics} />
        ) : (
          <>
            <Text>There is no topic for the {title} category yet.</Text>
            <Img img={img} />
          </>
        )}
        <Box>
          {logged ? (
            <Add />
          ) : (
            <>
              <Text>You must be logged in to add a topic</Text>
              <Login to="/login">Login</Login>
            </>
          )}
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Forum;
