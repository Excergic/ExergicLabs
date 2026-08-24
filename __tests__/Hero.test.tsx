/**
 * Hero Tests
 * Covers: rendering, scroll behaviour, CTA button
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../app/components/Hero';

// Mock smooth scroll
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', { value: mockScrollTo, writable: true });
Object.defineProperty(window, 'pageYOffset', { value: 0, writable: true });

beforeEach(() => mockScrollTo.mockClear());

describe('Hero — rendering', () => {
  it('renders the main headline text', () => {
    render(<Hero />);
    expect(screen.getByText(/Turn your Data into/i)).toBeInTheDocument();
  });

  it('renders the Revenue keyword', () => {
    render(<Hero />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
  });

  it('renders subtitle about AI native', () => {
    render(<Hero />);
    expect(screen.getByText(/Helping businesses become AI native/i)).toBeInTheDocument();
  });

  it('renders the Get in touch CTA button', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
  });

  it('has correct section id for anchor nav', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('#home')).toBeInTheDocument();
  });
});

describe('Hero — scroll on CTA click', () => {
  it('calls window.scrollTo when Get in touch is clicked and #contact exists', () => {
    // Create a fake contact section in DOM
    const contact = document.createElement('div');
    contact.id = 'contact';
    document.body.appendChild(contact);
    jest.spyOn(contact, 'getBoundingClientRect').mockReturnValue({
      top: 500, left: 0, right: 0, bottom: 0, width: 0, height: 0, x: 0, y: 0, toJSON: () => {},
    });

    render(<Hero />);
    fireEvent.click(screen.getByRole('button', { name: /get in touch/i }));

    expect(mockScrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: 'smooth' })
    );

    document.body.removeChild(contact);
  });

  it('does not throw when #contact element is missing', () => {
    render(<Hero />);
    expect(() =>
      fireEvent.click(screen.getByRole('button', { name: /get in touch/i }))
    ).not.toThrow();
    expect(mockScrollTo).not.toHaveBeenCalled();
  });
});
