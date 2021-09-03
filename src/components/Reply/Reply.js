import {
  Wrapper,
  FirstLine,
  Img,
  Username,
  Date,
  User,
  TextWrapper,
  Text,
  Thumb,
  Like,
  Number,
} from "./Reply.style";

import img from "../../resources/images/login.jpg";

const Replie = () => {
  return (
    <>
      <Wrapper>
        <FirstLine>
          <Date>August 5, 2021, 13:45</Date>
        </FirstLine>
        <User>
          <Img img={img} />
          <Username href="#">Example username</Username>
        </User>
        <TextWrapper>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            reprehenderit exercitationem veritatis tempora, in pariatur? Quasi
            deleniti perspiciatis adipisci delectus???
          </Text>
        </TextWrapper>
        <Thumb>
          <Like>
            <i className="fas fa-thumbs-up"></i>
            <Number>10</Number>
          </Like>
        </Thumb>
      </Wrapper>
    </>
  );
};

export default Replie;
