import React from 'react';
import { Cell } from './cell';

export default {
  component: Cell,
  title: 'Cell',
};

export const primary = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};
