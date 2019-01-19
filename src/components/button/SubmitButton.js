import React from "react";
import styled from "@emotion/styled";

import Button from "./Button";

const StyledSubmitInput = Button.withComponent("input");

// styled.input`
//   ${ButtonStyles};
//
//   ${props =>
//     props.primary &&
//     css`
//       background: #19bc9b;
//       border: 1px solid #207d6b;
//       color: #ffffff;
//     `};
//
//   ${props =>
//     props.plain &&
//     css`
//       background: none;
//       border: none;
//     `};
// `;

const SubmitButton = ({ className = "", form, children }) => (
  <StyledSubmitInput
    type="submit"
    className={`${className}`}
    form={form}
    value={children}
  />
);

export default SubmitButton;
