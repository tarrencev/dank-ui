import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  display: flex;
`;

const Key = styled.div`
  font-weight: 600;
`;

const Value = styled.div`
  display: flex;
`;

const KeyValue = ({ itemKey, children }) => (
  <Content>
    <Key>{itemKey}</Key>
    <Value>{children}</Value>
  </Content>
);

export default KeyValue;
