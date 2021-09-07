import { useState } from "react";
import { useParams } from "react-router";

import { Wrapper, H2, Form, Input, Textarea, Button, Error } from "./Add.style";

const Add = ({ action }) => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  const { category, topicId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "") {
      return setTitleError("Please enter title.");
    } else if (title.length < 5) {
      return setTitleError("Title is too short. Min(5)");
    } else if (title.length >= 80) {
      return setTitleError("Title is too long. Max(80)");
    } else {
      setTitleError("");
    }

    if (content === "") {
      return setContentError("Please enter your message.");
    } else if (content.length < 5) {
      return setContentError("Message is too short. Min(5)");
    } else {
      setContentError("");
    }
    if (action === "topic") {
      const result = await fetch("/add-topic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: sessionStorage.getItem("token"),
          category,
          title,
          content,
        }),
      }).then((res) => res.json());

      if (result.status === "ok") {
        document.location.href = `/topic/${result.topicId}`;
      }
    } else {
      const result = await fetch("/add-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: sessionStorage.getItem("token"),
          topicId,
          title,
          content,
          category,
        }),
      }).then((res) => res.json());

      if (result.status === "ok") {
        document.location.href = `/topic/${topicId}`;
      }
    }
  };

  return (
    <>
      <Wrapper>
        <H2>
          {action === "topic"
            ? `Create new Topic in "${category}"`
            : "Create new reply"}
        </H2>
        <Form onSubmit={handleSubmit}>
          <Input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError ? <Error>{titleError}</Error> : null}
          <Textarea
            placeholder="Enter your message"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {contentError ? <Error>{contentError}</Error> : null}
          <Button>Add</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Add;
