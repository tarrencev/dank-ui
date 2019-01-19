import React from "react";
import styled from "styled-components";

const InputRow = styled.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: 10px;
  }
`;

InputRow.displayName = "InputRow";

export default InputRow;
