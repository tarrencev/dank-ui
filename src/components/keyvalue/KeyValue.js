import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Key = styled.div`
  font-weight: 600;
  color: rgb(85, 85, 85);
  font-size: 15px;
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
