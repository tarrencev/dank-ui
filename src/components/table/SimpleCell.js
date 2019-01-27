import React from "react";

import TableCell from "./TableCell";

const SimpleCell = ({ rowIndex, col, data }) => {
  return (
    <div>
      {col.hasOwnProperty("length")
        ? data.get(rowIndex).getIn(col)
        : data.get(rowIndex).get(col)}
    </div>
  );
};

SimpleCell.displayName = "SimpleCell";

export default SimpleCell;
