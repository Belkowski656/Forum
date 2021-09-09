import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Reply from "../Reply/Reply";

const RepliesCreated = () => {
  const [replies, setReplies] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
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
  }, [userId]);
  console.log(replies);
  return (
    <>
      {replies.length ? (
        replies.map((reply, i) => (
          <Reply
            key={i}
            id={reply._id}
            title={reply.title}
            content={reply.content}
            creatorUsername={reply.creatorUsername}
            likes={reply.likes}
            creationDate={reply.creationDate}
            creatorId={reply.creatorId}
            type={"profile"}
          />
        ))
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export default RepliesCreated;
