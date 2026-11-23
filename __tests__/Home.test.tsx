import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

it('preserves the campaign-specific evidence without implying a warehouse correction', () => {
  render(<Home />);
  const result = screen.getByRole('region', { name: '32 contacts held back before outreach' });
  expect(within(result).getByText('Deliverable')).toBeVisible();
  expect(within(result).getByText('Hold for review')).toBeVisible();
  expect(within(result).getByText(/still marked ready in the warehouse/)).toBeVisible();
  expect(within(result).getByText('Campaign decision')).toBeVisible();
  expect(screen.queryByText('More systems I’ve built')).not.toBeInTheDocument();
});

it('shows three distinct readable examples without inventing a replacement identity', () => {
  render(<Home />);
  const work = screen.getByRole('region', { name: /How I decide/ });
  expect(within(work).getAllByText('Example record')).toHaveLength(3);
  expect(within(work).getByText('CRO')).toBeVisible();
  expect(within(work).getByText('blackrock.com')).toBeVisible();
  expect(within(work).getByText('Next qualified match')).toBeVisible();
});
