import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import vi from "timeago.js/lib/lang/en_US";

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
  StyledLink,
} from "./Table.style";

timeago.register("vi", vi);

const Table = ({ type, categories, topics, replies }) => {
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
            ? topics
                .map((topic, i) => (
                  <Row key={i}>
                    <Td>
                      <Title to={`/topic/${topic._id}`}>{topic.title}</Title>
                      <Description>{topic.content}</Description>
                    </Td>
                    <TdUser>
                      <StyledLink to={`/profile/${topic.creatorId}`}>
                        {topic.creatorUsername}
                      </StyledLink>
                    </TdUser>
                    <TdNumber>
                      {
                        replies.filter((reply) => reply.replyTo === topic._id)
                          .length
                      }
                    </TdNumber>
                    <TdTime>
                      <TimeAgo datetime={topic.creationDate} locale="vi" />
                    </TdTime>
                  </Row>
                ))
                .reverse()
            : null}
        </tbody>
      </Wrapper>
    </>
  );
};

export default Table;
