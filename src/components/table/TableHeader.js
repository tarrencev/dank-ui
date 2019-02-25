import React, { Children } from "react";
import styled from "@emotion/styled";

import TableCell from "./TableCell";

const StyledTableCell = styled(TableCell)`
  &[role="columnheader"] {
    position: sticky;
    top: 0;
    padding: 8px 5px;
    border-bottom: 1px solid #e3e4e4;
    background-color: #fff;
    height: 40px;
    z-index: 1;
  }
`;

function renderHeaderCell(child) {
  const { className, isHidden, header, ...rest } = child.props;
  return (
    <StyledTableCell
      role="columnheader"
      className={className}
      style={{
        visibility: isHidden ? "hidden" : "inherit"
      }}
      {...rest}
    >
      {header}
    </StyledTableCell>
  );
}

const TableHeader = ({ children }) => {
  return Children.map(children, renderHeaderCell);
};

TableHeader.displayName = "TableHeader";

export default TableHeader;
