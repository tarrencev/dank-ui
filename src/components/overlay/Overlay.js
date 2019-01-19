import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  background: #fff;
  color: #494949;
  right: 0px;
  padding: 10px;
  border: 1px solid #f8f8f8;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export default Overlay;
