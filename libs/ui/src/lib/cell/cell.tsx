import React from 'react';

import './cell.css';

/* eslint-disable-next-line */
export interface CellProps {}

export function Cell(props: CellProps) {
  return (
    <input style={{
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'lightgray',
    }} />
  );
}

export default Cell;
