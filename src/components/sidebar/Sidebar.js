import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 25px 0 20px;
  overflow: hidden;
`;

const Sidebar = ({ children, className = "" }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default Sidebar;
