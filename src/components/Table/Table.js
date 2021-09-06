import {
  Wrapper,
  FirstRow,
  Th,
  ThIcon,
  Row,
  Td,
  Title,
  Description,
  TdNumber,
  TdUser,
  TdTime,
} from "./Table.style";

const Table = ({ type, categories, topics, replies }) => {
  // const [lastActivity, setLastActivity] = useState("");

  // useEffect(() => {
  //   const sortedTopics = topics.sort((a, b) => {
  //     return new Date(b.creationDate) - new Date(a.creationDate);
  //   });

  //   const sortedReplies = replies.sort((a, b) => {
  //     return new Date(b.creationDate) - new Date(a.creationDate);
  //   });

  //   const formatedDate = (date) => {
  //     const lastActivityDate = new Date(date);
  //     const day = lastActivityDate.getDate();
  //     const month = lastActivityDate.getMonth();
  //     const year = lastActivityDate.getFullYear();

  //     setLastActivity("");
  //   };

  //   if (sortedTopics.length && sortedReplies.length) {
  //     console.log("both");
  //   } else if (sortedTopics.length) {
  //     formatedDate(sortedTopics[0].creationDate);
  //   } else if (sortedReplies.length) {
  //     console.log("replies");
  //   }
  // }, [topics, replies]);

  return (
    <>
      <Wrapper type={type}>
        <tbody>
          <FirstRow>
            <Th>
              {type === "topic" || type === "user" ? "Topic" : "Category"}
            </Th>
            <ThIcon>
              {type === "topic" ? (
                <i className="fas fa-user"></i>
              ) : (
                <i className="fas fa-comment"></i>
              )}
            </ThIcon>
            <ThIcon>
              <i className="fas fa-comments"></i>
            </ThIcon>
            <ThIcon>
              <i className="far fa-clock"></i>
            </ThIcon>
          </FirstRow>
          {type === "category"
            ? categories.map((category, i) => (
                <Row key={i}>
                  <Td>
                    <Title to={`/forum/${category.link}`}>
                      {category.name}
                    </Title>
                    <Description>{category.description}</Description>
                  </Td>
                  <TdNumber>
                    {
                      topics.filter((topic) => topic.category === category.link)
                        .length
                    }
                  </TdNumber>
                  <TdNumber>
                    {
                      replies.filter(
                        (reply) => reply.category === category.link
                      ).length
                    }
                  </TdNumber>
                  <TdTime>3 weeks, 5 days ago</TdTime>
                </Row>
              ))
            : null}
          {type === "topic"
            ? topics.map((topic, i) => (
                <Row key={i}>
                  <Td>
                    <Title to={`/topic/${topic._id}`}>{topic.title}</Title>
                    <Description>{topic.content}</Description>
                  </Td>
                  <TdUser>{topic.creatorUsername}</TdUser>
                  <TdNumber>
                    {
                      replies.filter((reply) => reply.replyTo === topic._id)
                        .length
                    }
                  </TdNumber>
                  <TdTime>3 weeks, 5 days ago</TdTime>
                </Row>
              ))
            : null}
        </tbody>
      </Wrapper>
    </>
  );
};

export default Table;
