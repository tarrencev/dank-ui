import React from "react";
import styled from "@emotion/styled";

const CardHeader = styled.div`
  flex: 1;
  margin: -1rem -1rem 0rem -1rem;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
`;

export default CardHeader;
