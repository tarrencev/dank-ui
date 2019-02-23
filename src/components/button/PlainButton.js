import React from "react";
import styled from "@emotion/styled";
import { Button as SmoothButton } from "@smooth-ui/core-em";

export default styled(SmoothButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  font-size: 13px;
  font-weight: 400;
  padding: 0;
  background: none !important;
  border: none !important;
  color: black;

  &:hover {
    color: tomato;
  }
`;
