/**
 * Projects Tests
 * Covers: all projects rendered, content correctness, section id
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock framer-motion to avoid jsdom animation issues
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
}));

import Projects from '../app/components/Projects';

describe('Projects — rendering', () => {
  it('renders the section heading', () => {
    render(<Projects />);
    expect(screen.getByText(/Built with AI, Shipped Fast/i)).toBeInTheDocument();
  });

  it('renders the "Our Projects" badge', () => {
    render(<Projects />);
    expect(screen.getByText('Our Projects')).toBeInTheDocument();
  });

  it('has correct section id for anchor nav', () => {
    const { container } = render(<Projects />);
    expect(container.querySelector('#showcase')).toBeInTheDocument();
  });

  it('renders all 4 project names', () => {
    render(<Projects />);
    expect(screen.getAllByText('Mandate Wizard')).toHaveLength(2); // icon + title
    expect(screen.getAllByText('Norric')).toHaveLength(2);
    expect(screen.getAllByText('CredBoost')).toHaveLength(2);
    expect(screen.getAllByText('HealthAI')).toHaveLength(2);
  });

  it('renders Mandate Wizard description', () => {
    render(<Projects />);
    expect(screen.getByText(/film and TV studios/i)).toBeInTheDocument();
  });

  it('renders Norric description', () => {
    render(<Projects />);
    expect(screen.getByText(/Real Estate Developers/i)).toBeInTheDocument();
  });

  it('renders CredBoost description', () => {
    render(<Projects />);
    expect(screen.getByText(/credit scores/i)).toBeInTheDocument();
  });

  it('renders HealthAI description', () => {
    render(<Projects />);
    expect(screen.getByText(/healthcare assistant/i)).toBeInTheDocument();
  });

  it('renders project icons (emojis)', () => {
    render(<Projects />);
    expect(screen.getAllByText('🧠').length).toBeGreaterThan(0);
    expect(screen.getAllByText('⚖️').length).toBeGreaterThan(0);
    expect(screen.getAllByText('💳').length).toBeGreaterThan(0);
    expect(screen.getAllByText('🏥').length).toBeGreaterThan(0);
  });
});
