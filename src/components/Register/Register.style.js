import styled from "styled-components";
import {
  blue,
  fontBig,
  fontSmall,
  fontStandard,
  gray,
} from "../../resources/variables/variables";

export const Wrapper = styled.div`
  max-width: 1400px;
  background-color: ${blue};
  color: white;
  margin: 20px;
  display: flex;
  @media (min-width: 992px) {
    margin: 20px auto;
  }
`;

export const Content = styled.div`
  padding: 40px;
  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const Title = styled.h3`
  font-size: ${fontBig};
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: ${fontStandard};
  color: ${gray};
  line-height: 160%;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${gray};
  border: none;
  cursor: pointer;
  color: white;
  font-size: ${fontSmall};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Image = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    width: 50%;
    height: 405px;
    background-color: #018ccd;
    background-image: url(${({ img }) => img});
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
