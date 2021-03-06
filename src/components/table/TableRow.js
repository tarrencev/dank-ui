import React from "react";
import styled from "@emotion/styled";

const StyledTableRow = styled.div`
  display: contents;

  &.is-selectable {
    cursor: pointer;
    user-select: none;
  }

  &.is-selected {
    background-color: #f5f5f5;
  }
`;

const TableRow = ({ children, index, onClick, onDoubleClick, isSelected }) => {
  return (
    <StyledTableRow
      className={`table-row ${onClick ? "is-selectable" : ""} ${
        isSelected ? "is-selected" : ""
      }`}
      onClick={onClick ? event => onClick && onClick(index, event) : null}
      onDoubleClick={
        onDoubleClick
          ? event => onDoubleClick && onDoubleClick(index, event)
          : null
      }
    >
      {children}
    </StyledTableRow>
  );
};

TableRow.displayName = "TableRow";

export default TableRow;
