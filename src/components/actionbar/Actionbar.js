import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 75px;
  flex-shrink: 0;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Left = styled.div`
  font-size: 19px;
`;

const Right = styled.div`
  display: flex;

  *:not(:first-child) {
    margin-left: 5px;
  }
`;

const Actionbar = ({ left, right }) => (
  <Wrapper>
    <Left>{left}</Left>
    <Spacer />
    <Right>{right}</Right>
  </Wrapper>
);

export default Actionbar;
