import React from 'react';
import { render } from '@testing-library/react';

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
