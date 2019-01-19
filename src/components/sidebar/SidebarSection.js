import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 17px;
  margin-bottom: 10px;
  color: #494949;
`;

const Content = styled.div`
  font-size: 14px;
`;

const SidebarSection = ({ children, title }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
);

export default SidebarSection;
