/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('renders header', () => {
  const { getByText } = render(<Header title='hello' description='world'/>);
  const linkElement = getByText(/Lerna/i);
  expect(linkElement).toBeDefined();
});
