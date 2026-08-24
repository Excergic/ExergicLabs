/**
 * WeBuildMVP Tests
 * Covers: rendering all service pills, comparison section
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeBuildMVP from '../app/components/WeBuildMVP';

describe('WeBuildMVP — rendering', () => {
  it('renders the main heading', () => {
    render(<WeBuildMVP />);
    expect(screen.getByText(/We build every kind of MVP fast/i)).toBeInTheDocument();
  });

  it('renders all four service pills', () => {
    render(<WeBuildMVP />);
    expect(screen.getByText('Web App Development')).toBeInTheDocument();
    expect(screen.getByText('AI Agents')).toBeInTheDocument();
    expect(screen.getByText('AI SaaS')).toBeInTheDocument();
    expect(screen.getByText('RAG ChatBot Integration')).toBeInTheDocument();
  });

  it('renders the 3x Faster badge', () => {
    render(<WeBuildMVP />);
    expect(screen.getByText('3x Faster Execution')).toBeInTheDocument();
  });

  it('renders comparison: 25 Days', () => {
    render(<WeBuildMVP />);
    expect(screen.getByText('25 Days')).toBeInTheDocument();
  });

  it('renders comparison: 90-180 Days', () => {
    render(<WeBuildMVP />);
    expect(screen.getByText('90-180 Days')).toBeInTheDocument();
  });

  it('renders "with ExergicLabs" label', () => {
    render(<WeBuildMVP />);
    expect(screen.getByText(/with ExergicLabs/i)).toBeInTheDocument();
  });

  it('renders "with others" label', () => {
    render(<WeBuildMVP />);
    expect(screen.getByText(/with others/i)).toBeInTheDocument();
  });

  it('renders 3x Faster Than Traditional Teams heading', () => {
    render(<WeBuildMVP />);
    expect(screen.getByText(/3x Faster Than Traditional Teams/i)).toBeInTheDocument();
  });
});
