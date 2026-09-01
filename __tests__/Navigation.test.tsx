/**
 * Navigation Tests
 * Covers: rendering, links, CTA
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../app/components/Navigation';

describe('Navigation — rendering', () => {
  it('renders the brand name ExergicLabs', () => {
    render(<Navigation />);
    // Brand is split across two elements: "Exergic" + "Labs" — match by accessible link name
    const link = screen.getByRole('link', { name: /exergic\s*labs/i });
    expect(link).toBeInTheDocument();
  });

  it('renders the Projects nav link', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders the Case Studies nav link', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /case studies/i })).toBeInTheDocument();
  });

  it('renders the About nav link', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });

  it('renders the Contact nav link', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument();
  });

  it('renders the Book an X-Ray CTA', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /book an x-ray/i })).toBeInTheDocument();
  });

  it('has sticky positioning on the header', () => {
    const { container } = render(<Navigation />);
    const header = container.querySelector('header');
    expect(header).toHaveStyle({ position: 'sticky' });
  });

  it('Projects link points to /projects', () => {
    render(<Navigation />);
    const link = screen.getByRole('link', { name: /^projects$/i });
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('Case Studies link points to /case-studies', () => {
    render(<Navigation />);
    const link = screen.getByRole('link', { name: /case studies/i });
    expect(link).toHaveAttribute('href', '/case-studies');
  });

  it('Book an X-Ray CTA links to contact section', () => {
    render(<Navigation />);
    const cta = screen.getByRole('link', { name: /book an x-ray/i });
    expect(cta).toHaveAttribute('href', '/#contact');
  });
});
