import React, { Component, Children, cloneElement } from "react";
import { Range } from "immutable";
import styled from "@emotion/styled";
import onClickOutside from "react-onclickoutside";

import TableCell from "./TableCell";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const StyledTable = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100px;

  grid-template-columns: auto auto;

  &[role="grid"] {
    width: 100%;
    display: grid;
    font-size: 1em;
    overflow-y: auto;
  }

  &[role="gridcell"] {
    align-items: center;
    border-bottom: 1px solid #d4d4d4;
    height: 54px;
  }

  .odd {
    background-color: #f5f5f5;
  }
`;

const StyledTableBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 40px;
  overflow: auto;
`;

function renderRow(
  data,
  children,
  index,
  onRowClick,
  onRowDoubleClick,
  isSelected
) {
  return (
    <TableRow
      data={data}
      index={index}
      key={index}
      onClick={onRowClick}
      onDoubleClick={onRowDoubleClick}
      isSelected={isSelected}
    >
      {Children.map(children, column => (
        <TableCell
          role="gridcell"
          className={index % 2 == 0 ? "even" : "odd"}
          key={index}
        >
          {cloneElement(column.props.cell, {
            ...column.props.cell.props,
            rowIndex: index,
            data
          })}
        </TableCell>
      ))}
    </TableRow>
  );
}

function renderBody(data, children, onRowClick, onRowDoubleClick, selectedRow) {
  const range = new Range(0, data && data.size ? data.size : 0);
  return range.map(index =>
    renderRow(
      data,
      children,
      index,
      onRowClick,
      onRowDoubleClick,
      selectedRow === index
    )
  );
}

class Table extends Component {
  handleClickOutside = event => {
    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
  };

  render() {
    const {
      children,
      data,
      onRowClick,
      onRowDoubleClick,
      selectedRow
    } = this.props;
    return (
      <StyledTable role="grid" className="table">
        <TableHeader children={children} />
        {renderBody(data, children, onRowClick, onRowDoubleClick, selectedRow)}
      </StyledTable>
    );
  }
}

export default onClickOutside(Table);
