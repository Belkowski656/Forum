import styled from "styled-components";
import {
  gray,
  blue,
  red,
  fontStandard,
  fontBig,
} from "../../resources/variables/variables";

export const Wrapper = styled.main`
  margin: 20px;
`;

export const StatsBox = styled.div`
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-size: 38px;

  i {
    line-height: 80px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${gray};

  :nth-child(1) ${Icon} {
    background-color: ${gray};
  }

  :nth-child(2) ${Icon} {
    background-color: ${blue};
  }

  :nth-child(3) ${Icon} {
    background-color: ${red};
  }

  @media (min-width: 576px) {
    width: 30%;
  }
`;

export const TextWrapper = styled.div``;

export const Text = styled.p`
  font-size: ${fontStandard};
  text-transform: uppercase;
  color: gray;
`;

export const Number = styled.p`
  color: ${gray};
  font-size: ${fontBig};
  font-weight: bold;
  text-align: right;
`;

export const Table = styled.table`
  width: 100%;
`;

export const FirstRow = styled.tr``;

export const Th = styled.th`
  color: ${gray};
  font-size: ${fontStandard};
  text-transform: uppercase;
  :nth-child(1) {
    text-align: left;
  }

  :nth-child(3),
  :nth-child(4) {
    visibility: hidden;
  }

  @media (min-width: 768px) {
    :nth-child(3),
    :nth-child(4) {
      visibility: visible;
    }
  }
`;
