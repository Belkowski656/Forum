import styled from "styled-components";
import { fontMedium } from "../../resources/variables/variables";

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
