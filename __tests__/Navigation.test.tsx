/**
 * Navigation Tests
 * Covers: rendering, smooth scroll, active link styles
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../app/components/Navigation';

const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', { value: mockScrollTo, writable: true });
Object.defineProperty(window, 'pageYOffset', { value: 0, writable: true });

beforeEach(() => mockScrollTo.mockClear());

function createSection(id: string, top = 400) {
  const el = document.createElement('div');
  el.id = id;
  jest.spyOn(el, 'getBoundingClientRect').mockReturnValue({
    top, left: 0, right: 0, bottom: 0, width: 0, height: 0, x: 0, y: 0, toJSON: () => {},
  });
  document.body.appendChild(el);
  return el;
}

describe('Navigation — rendering', () => {
  it('renders the brand name', () => {
    render(<Navigation />);
    expect(screen.getByText('ExergicLabs')).toBeInTheDocument();
  });

  it('renders Home nav link', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('renders Projects nav link', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders Book a call button', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /book a call/i })).toBeInTheDocument();
  });

  it('is fixed positioned (sticky nav)', () => {
    const { container } = render(<Navigation />);
    const nav = container.querySelector('nav');
    expect(nav?.className).toMatch(/fixed/);
  });
});

describe('Navigation — smooth scroll', () => {
  it('scrolls to #home when Home is clicked', () => {
    const el = createSection('home');
    render(<Navigation />);
    fireEvent.click(screen.getByRole('link', { name: /home/i }));
    expect(mockScrollTo).toHaveBeenCalledWith(expect.objectContaining({ behavior: 'smooth' }));
    document.body.removeChild(el);
  });

  it('scrolls to #showcase when Projects is clicked', () => {
    const el = createSection('showcase');
    render(<Navigation />);
    fireEvent.click(screen.getByRole('link', { name: /projects/i }));
    expect(mockScrollTo).toHaveBeenCalledWith(expect.objectContaining({ behavior: 'smooth' }));
    document.body.removeChild(el);
  });

  it('scrolls to #contact when Book a call is clicked', () => {
    const el = createSection('contact');
    render(<Navigation />);
    fireEvent.click(screen.getByRole('link', { name: /book a call/i }));
    expect(mockScrollTo).toHaveBeenCalledWith(expect.objectContaining({ behavior: 'smooth' }));
    document.body.removeChild(el);
  });

  it('does not throw when target section does not exist', () => {
    render(<Navigation />);
    expect(() => fireEvent.click(screen.getByRole('link', { name: /home/i }))).not.toThrow();
  });
});
