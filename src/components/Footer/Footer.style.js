import styled from "styled-components";
import { blue, fontStandard, gray } from "../../resources/variables/variables";

export const Wrapper = styled.footer`
  background-color: ${gray};
  color: white;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  @media (min-width: 1400px) {
    padding: 20px 0;
  }
`;

export const Text = styled.p`
  font-size: ${fontStandard};
`;

export const Up = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${blue};
  font-size: ${fontStandard};
  cursor: pointer;
`;
