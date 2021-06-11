import React from 'react';
import { render } from '@testing-library/react';
import { Editor, Sheet } from '@jcel/ui';
import { mocked } from 'ts-jest';

import App from './app';

jest.mock('@jcel/ui', () => ({
  Editor: () => '[EDITOR]',
  Sheet: () => '[SHEET]',
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });
});
