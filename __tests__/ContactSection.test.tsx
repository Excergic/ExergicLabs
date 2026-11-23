import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactSection from '../app/components/ContactSection';
import { siteConfig } from '../app/site-config';

it('offers the existing calendar and email destinations', () => {
  render(<ContactSection />);
  expect(screen.getByRole('link', { name: 'Discuss a project' })).toHaveAttribute('href', siteConfig.calendar);
  expect(screen.getByRole('link', { name: 'Get in touch.' })).toHaveAttribute('href', `mailto:${siteConfig.email}`);
  expect(screen.getByRole('heading')).toHaveTextContent('Have a GTM workflow you want to fix?');
});
