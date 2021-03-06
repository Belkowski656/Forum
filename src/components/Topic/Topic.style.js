import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  blue,
  fontMedium,
  fontSmall,
  fontStandard,
  gray,
  lightGrayFont,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  color: ${lightGrayFont};
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Post = styled.div`
  margin-bottom: 100px;
`;

export const FirstLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

export const H4 = styled.h4`
  font-size: ${fontStandard};
  font-weight: bold;
  text-transform: uppercase;
  color: ${gray};
`;

export const Date = styled.p`
  margin-top: 15px;
  font-size: ${fontSmall};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
`;

export const Img = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  border-radius: 50%;
`;

export const Username = styled(Link)`
  color: ${gray};
  font-weight: bold;
  text-decoration: none;
  margin-left: 20px;
  transition: 0.2s;

  :hover {
    color: ${blue};
  }
`;

export const TextWrapper = styled.div`
  padding: 50px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
`;

export const Text = styled.p`
  line-height: 200%;
  text-align: justify;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
`;

export const Like = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  color: ${({ active }) => (active ? blue : gray)};
  margin-right: 10px;
  transition: 0.2s;
  cursor: pointer;

  i {
    margin-right: 5px;
  }

  :hover {
    color: ${blue};
  }
`;

export const UnLike = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  color: ${gray};
  transition: 0.2s;
  cursor: pointer;

  i {
    margin-right: 5px;
  }

  :hover {
    color: ${blue};
  }
`;

export const Number = styled.p`
  font-weight: bold;
`;

export const Replies = styled.div``;

export const RepliesTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: ${fontMedium};
`;

export const Replie = styled.div`
  margin-bottom: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Login = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  background-color: ${blue};
  padding: 10px 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export const TextLogin = styled.p`
  text-align: center;
  font-size: ${fontStandard};
`;

export const TextError = styled.p`
  font-size: ${fontMedium};
  text-align: center;
  margin-top: 50px;
  width: 100%;
`;

export const ImgError = styled.div`
  background-image: url(${({ img }) => img});
  width: 300px;
  height: 300px;
  background-size: contain;
  margin: 50px auto;
`;
