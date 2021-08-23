import { Wrapper, Td, TdNumber, Title, Description, Update } from "./Row.style";

const Row = () => {
  return (
    <>
      <Wrapper>
        <Td>
          <Title>Example Title</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nulla perspiciatis tempora.
          </Description>
        </Td>
        <TdNumber>47</TdNumber>
        <TdNumber>554</TdNumber>
        <Td>
          <Update>3 months, 2 week ago</Update>
        </Td>
      </Wrapper>
    </>
  );
};

export default Row;
