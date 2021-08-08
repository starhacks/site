import { render, screen } from '@testing-library/react';
import About from './about/About';
import React from 'react';
import * as Constants from './constants';

test('renders learn react link', () => {
    render(<About title={Constants.about} />);
    const linkElement = screen.getByText(Constants.about);
    expect(linkElement).toBeInTheDocument();
});
