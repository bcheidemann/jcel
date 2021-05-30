import React from 'react';

import './cell.css';

/* eslint-disable-next-line */
export interface CellProps {}

export function Cell(props: CellProps) {
  return (
    <input style={{
      flex: 1,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderColor: 'lightgray',
      minWidth: 50,
    }} />
  );
}

export default Cell;
