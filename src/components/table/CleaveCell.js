import React from "react";
import styled from "@emotion/styled";
import Cleave from "cleave.js/react";
import adapt from "../../utils/adapt";

const StyledCleave = styled(Cleave)`
  width: 100%;
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;

  &:focus {
    outline: 0;
  }
`;

const CleaveCell = ({
  children,
  col,
  isEditing,
  data,
  rowIndex,
  valid,
  ...rest
}) => <StyledCleave {...rest} key={rowIndex} />;

CleaveCell.displayName = "CleaveCell";

export default adapt(CleaveCell);
