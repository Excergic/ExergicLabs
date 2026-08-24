/**
 * ContactSection Tests
 * Covers: form rendering, validation, submission states, edge cases
 */
import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactSection from '../app/components/ContactSection';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
});

// ─── Helpers ───────────────────────────────────────────────────────────────────

function setupSuccessResponse() {
  mockFetch.mockResolvedValueOnce({
    json: async () => ({ success: true }),
  } as Response);
}

function setupFailureResponse() {
  mockFetch.mockResolvedValueOnce({
    json: async () => ({ success: false, message: 'Server error' }),
  } as Response);
}

function setupNetworkError() {
  mockFetch.mockRejectedValueOnce(new Error('Network failure'));
}

async function fillAndSubmit(overrides: {
  firstName?: string;
  lastName?: string;
  email?: string;
  solution?: string;
} = {}) {
  const user = userEvent.setup();

  const firstName = overrides.firstName ?? 'John';
  const lastName = overrides.lastName ?? 'Doe';
  const email = overrides.email ?? 'john@example.com';
  const solution = overrides.solution ?? 'I need an AI chatbot.';

  if (firstName) await user.type(screen.getByLabelText('First Name'), firstName);
  if (lastName) await user.type(screen.getByLabelText('Last Name'), lastName);
  if (email) await user.type(screen.getByLabelText('Your Company Email'), email);
  if (solution) await user.type(screen.getByLabelText(/Tell us what type of solution/i), solution);

  await user.click(screen.getByRole('button', { name: /send message/i }));
}

// ─── Rendering ─────────────────────────────────────────────────────────────────

describe('ContactSection — rendering', () => {
  it('renders the section heading', () => {
    render(<ContactSection />);
    expect(screen.getByText("Let's")).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('renders all four form fields', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Company Email')).toBeInTheDocument();
    expect(screen.getByLabelText(/Tell us what type of solution/i)).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<ContactSection />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<ContactSection />);
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });
});

// ─── Form Interaction ──────────────────────────────────────────────────────────

describe('ContactSection — form interaction', () => {
  it('updates first name field on user input', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('First Name') as HTMLInputElement;
    await user.type(input, 'Alice');
    expect(input.value).toBe('Alice');
  });

  it('updates last name field on user input', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('Last Name') as HTMLInputElement;
    await user.type(input, 'Smith');
    expect(input.value).toBe('Smith');
  });

  it('updates email field on user input', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('Your Company Email') as HTMLInputElement;
    await user.type(input, 'alice@corp.com');
    expect(input.value).toBe('alice@corp.com');
  });

  it('updates solution textarea on user input', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const textarea = screen.getByLabelText(/Tell us what type of solution/i) as HTMLTextAreaElement;
    await user.type(textarea, 'Need a RAG system');
    expect(textarea.value).toBe('Need a RAG system');
  });
});

// ─── Successful Submission ─────────────────────────────────────────────────────

describe('ContactSection — successful submission', () => {
  it('shows loading state while submitting', async () => {
    // Make fetch hang until we check state
    mockFetch.mockReturnValueOnce(new Promise(() => {}));
    render(<ContactSection />);

    await fillAndSubmit();

    expect(screen.getByText(/sending message/i)).toBeInTheDocument();
  });

  it('shows success message after successful submission', async () => {
    setupSuccessResponse();
    render(<ContactSection />);

    await fillAndSubmit();

    await waitFor(() =>
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    );
  });

  it('hides the form after successful submission', async () => {
    setupSuccessResponse();
    render(<ContactSection />);

    await fillAndSubmit();

    await waitFor(() =>
      expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument()
    );
  });

  it('sends correct payload to Web3Forms API', async () => {
    setupSuccessResponse();
    render(<ContactSection />);

    await fillAndSubmit({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@startup.com',
      solution: 'Need AI audit',
    });

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));

    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toBe('https://api.web3forms.com/submit');
    expect(options.method).toBe('POST');

    const body = JSON.parse(options.body);
    expect(body.firstName).toBe('Jane');
    expect(body.lastName).toBe('Doe');
    expect(body.email).toBe('jane@startup.com');
    expect(body.message).toBe('Need AI audit');
    expect(body.subject).toBe('New Contact from Jane Doe');
  });

  it('resets form fields after success (after 3s timer)', async () => {
    jest.useFakeTimers();
    setupSuccessResponse();
    render(<ContactSection />);

    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    await user.type(screen.getByLabelText('First Name'), 'Test');
    await user.type(screen.getByLabelText(/Tell us what type of solution/i), 'Some solution');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    );

    act(() => jest.advanceTimersByTime(3100));

    await waitFor(() =>
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    );

    const firstName = screen.getByLabelText('First Name') as HTMLInputElement;
    expect(firstName.value).toBe('');

    jest.useRealTimers();
  });
});

// ─── Failed Submission ─────────────────────────────────────────────────────────

describe('ContactSection — failed submission', () => {
  it('does not show success message on server error', async () => {
    setupFailureResponse();
    render(<ContactSection />);

    await fillAndSubmit();

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    expect(screen.queryByText(/message sent successfully/i)).not.toBeInTheDocument();
  });

  it('re-enables submit button after server failure', async () => {
    setupFailureResponse();
    render(<ContactSection />);

    await fillAndSubmit();

    await waitFor(() =>
      expect(screen.getByRole('button', { name: /send message/i })).not.toBeDisabled()
    );
  });

  it('does not show success message on network error', async () => {
    setupNetworkError();
    render(<ContactSection />);

    await fillAndSubmit();

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    expect(screen.queryByText(/message sent successfully/i)).not.toBeInTheDocument();
  });

  it('re-enables submit button after network error', async () => {
    setupNetworkError();
    render(<ContactSection />);

    await fillAndSubmit();

    await waitFor(() =>
      expect(screen.getByRole('button', { name: /send message/i })).not.toBeDisabled()
    );
  });
});

// ─── Edge Cases ────────────────────────────────────────────────────────────────

describe('ContactSection — edge cases', () => {
  it('requires the solution field (native HTML required attribute)', () => {
    render(<ContactSection />);
    const textarea = screen.getByLabelText(/Tell us what type of solution/i);
    expect(textarea).toBeRequired();
  });

  it('accepts special characters in name fields', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('First Name') as HTMLInputElement;
    await user.type(input, "O'Brien-López");
    expect(input.value).toBe("O'Brien-López");
  });

  it('accepts emoji in textarea', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const textarea = screen.getByLabelText(/Tell us what type of solution/i) as HTMLTextAreaElement;
    await user.type(textarea, 'Need AI help 🤖🚀');
    expect(textarea.value).toBe('Need AI help 🤖🚀');
  });

  it('sanitizes XSS — input value stored as plain text, not executed', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('First Name') as HTMLInputElement;
    const xssPayload = '<script>alert("xss")</script>';
    await user.type(input, xssPayload);
    // Value is stored as text
    expect(input.value).toBe(xssPayload);
    // No script tags injected into DOM
    expect(document.querySelector('script[src]')).toBeNull();
  });

  it('handles very long textarea input (1000+ chars)', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const textarea = screen.getByLabelText(/Tell us what type of solution/i) as HTMLTextAreaElement;
    const longText = 'A'.repeat(1000);
    await user.type(textarea, longText);
    expect(textarea.value).toHaveLength(1000);
  });

  it('disables submit button while submitting to prevent double-submit', async () => {
    mockFetch.mockReturnValueOnce(new Promise(() => {})); // never resolves
    render(<ContactSection />);

    await fillAndSubmit();

    const btn = screen.getByText(/sending message/i).closest('button');
    expect(btn).toBeDisabled();
  });

  it('email field accepts valid corporate email format', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('Your Company Email') as HTMLInputElement;
    await user.type(input, 'cto@enterprise.co.uk');
    expect(input.value).toBe('cto@enterprise.co.uk');
  });

  it('trims nothing — preserves whitespace in solution field as typed', async () => {
    setupSuccessResponse();
    render(<ContactSection />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText('First Name'), 'A');
    await user.type(screen.getByLabelText('Last Name'), 'B');
    await user.type(screen.getByLabelText('Your Company Email'), 'a@b.com');
    await user.type(screen.getByLabelText(/Tell us what type of solution/i), '  spaced input  ');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    const body = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(body.message).toBe('  spaced input  ');
  });
});
