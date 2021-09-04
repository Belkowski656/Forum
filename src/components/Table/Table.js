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

const Table = ({ type, categories }) => {
  console.log(type);
  return (
    <>
      <Wrapper type={type}>
        <tbody>
          <FirstRow>
            <Th>
              {type === "topic" || type === "user" ? "Topic" : "Category"}
            </Th>
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
          {type === "category"
            ? categories.map((category, i) => (
                <Row key={i}>
                  <Td>
                    <Title to={`/forum/${category.link}`}>
                      {category.name}
                    </Title>
                    <Description>{category.description}</Description>
                  </Td>
                  <TdNumber>22</TdNumber>
                  <TdNumber>113</TdNumber>
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
