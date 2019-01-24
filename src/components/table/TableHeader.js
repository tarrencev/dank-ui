import React, { Children } from "react";
import styled from "@emotion/styled";

import TableCell from "./TableCell";

const StyledTableHeader = styled.div`
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #95aac9;
  border-bottom-width: 1px;
  background-color: #f9fbfd;
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
