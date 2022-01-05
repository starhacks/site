import { render, screen } from '@testing-library/react';
import About from './about/About';
import React from 'react';

test('renders learn react link', () => {
  render(<About title={'ABOUT'} />);
  const linkElement = screen.getByText('ABOUT');
  expect(linkElement).toBeInTheDocument();
});
