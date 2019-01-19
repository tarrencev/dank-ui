import React, { Children } from "react";
import styled from "@emotion/styled";

import TableCell from "./TableCell";

const StyledTableHeader = styled.div`
  color: #525252;
  font-weight: 300;
  letter-spacing: 1.1px;
  line-height: 19px;

  .table-cell {
    font-size: 12px;
  }
`;

const StyledTableRow = styled.div`
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
`;

function renderHeaderCell(child) {
  const { className, header } = child.props;
  return <TableCell className={className}>{header}</TableCell>;
}

const TableHeader = ({ children }) => {
  return (
    <StyledTableHeader className="table-header">
      <StyledTableRow className="table-row">
        {Children.map(children, renderHeaderCell)}
      </StyledTableRow>
    </StyledTableHeader>
  );
};

TableHeader.displayName = "TableHeader";

export default TableHeader;
