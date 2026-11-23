import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../app/components/Navigation';

it('uses ExergicLabs branding and links to the centered sections and calendar', () => {
  render(<Navigation />);
  expect(screen.getByRole('link', { name: 'ExergicLabs' })).toHaveAttribute('href', '/');
  expect(screen.getByRole('link', { name: 'Case studies' })).toHaveAttribute('href', '/#selected-work');
  expect(screen.getByRole('link', { name: 'Book a call' })).toHaveAttribute('href', 'https://calendly.com/dhaivat-jambudia/new-meeting');
  expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#contact');
});
