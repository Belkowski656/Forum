import styled from "styled-components";
import {
  blue,
  fontHuge,
  fontSmall,
  fontStandard,
  gray,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  color: white;
  @media (min-width: 576px) {
    display: flex;
  }
`;

export const Image = styled.div`
  background-image: url(${({ img }) => img});
  display: none;

  @media (min-width: 576px) {
    display: block;
    width: 50%;
    background-size: cover;
  }
`;

export const Content = styled.div`
  background-color: ${gray};
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: 100vh;

  @media (min-width: 576px) {
    width: 50%;
  }
`;

export const Logo = styled.a`
  display: block;
  text-align: center;
  font-size: ${fontHuge};
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

export const Form = styled.form`
  padding: 0 25px;
  max-width: 400px;
  margin: 50px auto 0;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: ${fontStandard};
  color: white;
  background-color: rgba(0, 0, 0, 0.27);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${blue};
  border: none;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${fontSmall};
  cursor: pointer;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 50px auto 0;
  padding: 0 25px;
  max-width: 400px;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  transition: 0.2s;
  width: 50%;

  :hover {
    color: ${blue};
  }

  i {
    margin-right: 10px;
  }
  :nth-child(2) {
    text-align: right;
  }
`;
