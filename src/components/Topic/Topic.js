import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Reply from "../Reply/Reply";

import {
  Wrapper,
  Post,
  FirstLine,
  H4,
  Date,
  User,
  Img,
  Username,
  TextWrapper,
  Text,
  Thumbs,
  Like,
  UnLike,
  Number,
  Replies,
  RepliesTitle,
} from "./Topic.style";

import img from "../../resources/images/login.jpg";

const Topix = () => {
  return (
    <>
      <Navigation />
      <Header type={"topic"} title={"Topic Title"} text={""} />
      <Wrapper>
        <Post>
          <FirstLine>
            <H4>Post Title??</H4>
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
          <Thumbs>
            <Like>
              <i className="fas fa-thumbs-up"></i>
              <Number>10</Number>
            </Like>
            <UnLike>
              <i className="fas fa-thumbs-down"></i>
              <Number>0</Number>
            </UnLike>
          </Thumbs>
        </Post>
        <RepliesTitle>Replies</RepliesTitle>
        <Replies>
          <Reply />
          <Reply />
          <Reply />
          <Reply />
          <Reply />
        </Replies>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Topix;
