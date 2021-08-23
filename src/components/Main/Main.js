import Row from "../Row/Row";

import {
  Wrapper,
  StatsBox,
  Box,
  Icon,
  TextWrapper,
  Text,
  Number,
  Table,
  FirstRow,
  Th,
} from "./Main.style";

const Main = () => {
  return (
    <>
      <Wrapper>
        <StatsBox>
          <Box>
            <Icon>
              <i className="fas fa-thumbtack"></i>
            </Icon>
            <TextWrapper>
              <Text>Posts</Text>
              <Number>20</Number>
            </TextWrapper>
          </Box>
          <Box>
            <Icon>
              <i className="fas fa-bullhorn"></i>
            </Icon>
            <TextWrapper>
              <Text>Topics</Text>
              <Number>159</Number>
            </TextWrapper>
          </Box>
          <Box>
            <Icon>
              <i className="fas fa-comment-dots"></i>
            </Icon>
            <TextWrapper>
              <Text>Replies</Text>
              <Number>363</Number>
            </TextWrapper>
          </Box>
        </StatsBox>
        <Table>
          <tbody>
            <FirstRow>
              <Th>Category</Th>
              <Th>
                <i className="fas fa-comment"></i>
              </Th>
              <Th>
                <i className="fas fa-comments"></i>
              </Th>
              <Th>
                <i className="far fa-clock"></i>
              </Th>
            </FirstRow>
            <Row />
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
};

export default Main;
