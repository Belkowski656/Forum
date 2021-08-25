import styled from "styled-components";
import {
  fontHuge,
  fontStandard,
  gray,
  lightGrayFont,
} from "../../resources/variables/variables";

export const Wrapper = styled.div``;

export const Stats = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StatBox = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  @media (min-width: 992px) {
    width: 30%;
  }
`;

export const Icon = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 0 auto 15px;
  font-size: ${fontHuge};
  color: ${gray};
  border-radius: 50%;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StatText = styled.p`
  color: ${gray};
  font-weight: bold;
  font-size: ${fontStandard};
  margin-bottom: 10px;
`;

export const StatValue = styled.p`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${gray};
  color: white;
  font-weight: bold;
`;

export const Informations = styled.ul`
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: none;
`;

export const Info = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Text = styled.p`
  padding: 20px;
  color: ${gray};
  font-weight: bold;
  font-size: ${fontStandard};
`;

export const Value = styled.span`
  margin-left: 5px;
  color: ${lightGrayFont};
  font-weight: normal;
`;
