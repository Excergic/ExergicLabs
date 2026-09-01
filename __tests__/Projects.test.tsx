/**
 * Projects Page Tests
 * Covers: section rendering, project placeholders, CTA
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectsPage from '../app/projects/page';

describe('Projects page — rendering', () => {
  it('renders the Projects label', () => {
    render(<ProjectsPage />);
    expect(screen.getAllByText(/Projects/i).length).toBeGreaterThan(0);
  });

  it('renders the Selected work heading', () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/Selected work/i)).toBeInTheDocument();
  });

  it('renders the section with id="projects"', () => {
    const { container } = render(<ProjectsPage />);
    expect(container.querySelector('#projects')).toBeInTheDocument();
  });

  it('renders three project placeholder cards', () => {
    render(<ProjectsPage />);
    expect(screen.getByText('Project 01')).toBeInTheDocument();
    expect(screen.getByText('Project 02')).toBeInTheDocument();
    expect(screen.getByText('Project 03')).toBeInTheDocument();
  });

  it('renders the Workflow X-Ray CTA heading', () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/five-day Workflow X-Ray/i)).toBeInTheDocument();
  });

  it('renders Book a time link to Calendly', () => {
    render(<ProjectsPage />);
    const link = screen.getByRole('link', { name: /book a time/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('calendly'));
  });

  it('renders Send the details instead link', () => {
    render(<ProjectsPage />);
    expect(screen.getByRole('link', { name: /send the details instead/i })).toBeInTheDocument();
  });
});
