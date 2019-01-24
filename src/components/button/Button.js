import React from "react";
import styled from "@emotion/styled";
import { Button as SmoothButton } from "@smooth-ui/core-em";

export default styled(SmoothButton)`
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  font-size: 13px;
  font-weight: 400;
  padding: 0 12px;

  &:focus {
    border-color: #96a0a6;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;
