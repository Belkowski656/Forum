import Table from "../Table/Table";

import {
  Wrapper,
  StatsBox,
  Box,
  Icon,
  TextWrapper,
  Text,
  Number,
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
        <Table />
      </Wrapper>
    </>
  );
};

export default Main;
