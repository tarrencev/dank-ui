import React from "react";
import styled, { css } from "styled-components";
import { Button as SmoothButton } from "smooth-ui";

import Spinner from "../spinner/Spinner";

export default SmoothButton.extend`
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  font-size: 13px;
  font-weight: 400;
  padding: 0 12px;
  -webkit-appearance: none;
  text-decoration: none;
  outline: none;
  background: none;

  &:focus {
    border-color: #96a0a6;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  svg {
    ${'' /* margin-right: 7px; */}
  }
`;
