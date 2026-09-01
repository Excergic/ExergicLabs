/**
 * Case Studies Page Tests
 * Covers: section rendering, carousel cards, risk-adjusted autonomy section
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CaseStudiesPage from '../app/case-studies/page';

describe('Case Studies page — rendering', () => {
  it('renders the Case studies label', () => {
    render(<CaseStudiesPage />);
    expect(screen.getAllByText(/Case studies/i).length).toBeGreaterThan(0);
  });

  it('renders the main heading', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/Three responsibilities we redesign most often/i)).toBeInTheDocument();
  });

  it('renders the section with id="case-studies"', () => {
    const { container } = render(<CaseStudiesPage />);
    expect(container.querySelector('#case-studies')).toBeInTheDocument();
  });

  it('renders Meeting to follow-through card', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/Meeting to follow-through/i)).toBeInTheDocument();
  });

  it('renders Research to decision card', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/Research to decision/i)).toBeInTheDocument();
  });

  it('renders Management reporting card', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/Management reporting/i)).toBeInTheDocument();
  });

  it('renders previous carousel button', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByRole('button', { name: /previous case study/i })).toBeInTheDocument();
  });

  it('renders next carousel button', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByRole('button', { name: /next case study/i })).toBeInTheDocument();
  });

  it('renders the Risk-adjusted autonomy section', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/Risk-adjusted autonomy/i)).toBeInTheDocument();
  });

  it('renders all four autonomy tiers', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/Tier 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Tier 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Tier 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Tier 4/i)).toBeInTheDocument();
  });

  it('renders Autonomy falls as consequence rises heading', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/Autonomy falls as consequence rises/i)).toBeInTheDocument();
  });
});
