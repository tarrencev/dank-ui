import React, { Component, Children, cloneElement } from "react";
import { Range } from "immutable";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const StyledTable = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100px;
`;

const StyledTableBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 40px;
  overflow: auto;
`;

function renderRow(data, children, index, onRowClick, onRowDoubleClick, isSelected) {
  return (
    <TableRow
      data={data}
      index={index}
      key={index}
      onClick={onRowClick}
      onDoubleClick={onRowDoubleClick}
      isSelected={isSelected}
    >
      {Children.map(children, column =>
        cloneElement(column.props.cell, {
          ...column.props.cell.props,
          data,
          rowIndex: index
        })
      )}
    </TableRow>
  );
}

function renderBody(data, children, onRowClick, onRowDoubleClick, selectedRow) {
  const range = new Range(0, data.size);
  return range.map(index =>
    renderRow(data, children, index, onRowClick, onRowDoubleClick, selectedRow === index)
  );
}

class Table extends Component {
  handleClickOutside = event => {
    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
  };

  render() {
    const { children, data, onRowClick, onRowDoubleClick, selectedRow } = this.props;
    return (
      <StyledTable className="table">
        <TableHeader children={children} />
        <StyledTableBody className="table-body">
          {renderBody(data, children, onRowClick, onRowDoubleClick, selectedRow)}
        </StyledTableBody>
      </StyledTable>
    );
  }
}

export default onClickOutside(Table);
