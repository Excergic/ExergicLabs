/**
 * Hero Tests
 * Covers: rendering, headline, CTAs, section id
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../app/components/Hero';

describe('Hero — rendering', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Using GPT is not the same as being AI-native/i)
    ).toBeInTheDocument();
  });

  it('renders the 45-day transformation label', () => {
    render(<Hero />);
    expect(
      screen.getByText(/The 45-day AI-native transformation/i)
    ).toBeInTheDocument();
  });

  it('renders the subtitle about AI operating system', () => {
    render(<Hero />);
    expect(
      screen.getByText(/AI operating system in 45 days/i)
    ).toBeInTheDocument();
  });

  it('renders the Book a Workflow X-Ray CTA link', () => {
    render(<Hero />);
    expect(
      screen.getByRole('link', { name: /Book a Workflow X-Ray/i })
    ).toBeInTheDocument();
  });

  it('renders the See the 45-day protocol link', () => {
    render(<Hero />);
    expect(
      screen.getByRole('link', { name: /See the 45-day protocol/i })
    ).toBeInTheDocument();
  });

  it('has correct section id="top" for anchor navigation', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('#top')).toBeInTheDocument();
  });

  it('Book a Workflow X-Ray links to #contact', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', { name: /Book a Workflow X-Ray/i });
    expect(cta).toHaveAttribute('href', '#contact');
  });

  it('See the 45-day protocol links to #protocol', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /See the 45-day protocol/i });
    expect(link).toHaveAttribute('href', '#protocol');
  });
});
