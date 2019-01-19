import React from "react";

import TableCell from "./TableCell";

const SimpleCell = ({ className = "", col, data, rowIndex }) => {
  return (
    <TableCell className={className} key={rowIndex}>
      {col.hasOwnProperty("length")
        ? data.get(rowIndex).getIn(col)
        : data.get(rowIndex).get(col)}
    </TableCell>
  );
};

SimpleCell.displayName = "SimpleCell";

export default SimpleCell;
