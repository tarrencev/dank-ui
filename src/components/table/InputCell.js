import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;

  &:focus {
    outline: 0;
  }
`;

const InputCell = ({ children, col, isEditing, data, rowIndex, ...rest }) => (
  <Input {...rest} key={rowIndex} />
);

InputCell.displayName = "InputCell";

export default InputCell;
