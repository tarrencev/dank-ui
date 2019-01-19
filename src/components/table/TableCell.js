import React from "react";
import styled from "@emotion/styled";

const StyledTableCell = styled.div`
  color: #424242;
  align-items: center;
  flex: 1;
  font-size: 14px;
  overflow: hidden;
  margin: 0 5px;
  padding: 10px 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableCell = ({ className = "", children }) => (
  <StyledTableCell className={`table-cell ${className}`}>
    {children}
  </StyledTableCell>
);

TableCell.displayName = "TableCell";

export default TableCell;
