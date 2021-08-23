import styled from "styled-components";
import { fontStandard, gray } from "../../resources/variables/variables";

export const Wrapper = styled.tr``;

export const Td = styled.td`
  padding: 15px 0;
  color: #6b717e;

  :nth-child(1) {
    padding-right: 20px;
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

export const TdNumber = styled.td`
  padding: 20px;
  color: #6b717e;
  font-weight: bold;

  :nth-child(2) {
    visibility: hidden;
  }
  @media (min-width: 768px) {
    :nth-child(2) {
      visibility: visible;
    }
  }
`;

export const Title = styled.p`
  font-size: ${fontStandard};
  font-weight: bold;
  color: ${gray};
`;

export const Description = styled.p`
  margin-top: 10px;
`;

export const Update = styled.p`
  padding: 0 20px;
`;
