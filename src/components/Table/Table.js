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
  TdTime,
} from "./Table.style";

const Table = ({ type }) => {
  return (
    <>
      <Wrapper>
        <tbody>
          <FirstRow>
            <Th>{type === "topic" ? "Topic" : "Category"}</Th>
            <ThIcon>
              <i className="fas fa-comment"></i>
            </ThIcon>
            <ThIcon>
              <i className="fas fa-comments"></i>
            </ThIcon>
            <ThIcon>
              <i className="far fa-clock"></i>
            </ThIcon>
          </FirstRow>
          <Row>
            <Td>
              <Title>Example Category</Title>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                omnis!
              </Description>
            </Td>
            <TdNumber>22</TdNumber>
            <TdNumber>113</TdNumber>
            <TdTime>3 weeks, 5 days ago</TdTime>
          </Row>
          <Row>
            <Td>
              <Title>Example Category</Title>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                omnis!
              </Description>
            </Td>
            <TdNumber>22</TdNumber>
            <TdNumber>113</TdNumber>
            <TdTime>3 weeks, 5 days ago</TdTime>
          </Row>
          <Row>
            <Td>
              <Title>Example Category</Title>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                omnis!
              </Description>
            </Td>
            <TdNumber>22</TdNumber>
            <TdNumber>113</TdNumber>
            <TdTime>3 weeks, 5 days ago</TdTime>
          </Row>
          <Row>
            <Td>
              <Title>Example Category</Title>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                omnis!
              </Description>
            </Td>
            <TdNumber>22</TdNumber>
            <TdNumber>113</TdNumber>
            <TdTime>3 weeks, 5 days ago</TdTime>
          </Row>
          <Row>
            <Td>
              <Title>Example Category</Title>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                omnis!
              </Description>
            </Td>
            <TdNumber>22</TdNumber>
            <TdNumber>113</TdNumber>
            <TdTime>3 weeks, 5 days ago</TdTime>
          </Row>
        </tbody>
      </Wrapper>
    </>
  );
};

export default Table;
