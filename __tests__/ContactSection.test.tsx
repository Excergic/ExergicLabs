/**
 * ContactSection Tests
 * Covers: rendering, form fields, form note state
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactSection from '../app/components/ContactSection';

// Mock window methods used on submit
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', { value: mockOpen, writable: true });

beforeEach(() => {
  mockOpen.mockClear();
});

// ─── Rendering ─────────────────────────────────────────────────────────────────

describe('ContactSection — rendering', () => {
  it('renders the Contact section heading', () => {
    render(<ContactSection />);
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('renders the X-ray heading', () => {
    render(<ContactSection />);
    expect(screen.getByText(/X-ray it/i)).toBeInTheDocument();
  });

  it('renders the Name field', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/^Name$/i)).toBeInTheDocument();
  });

  it('renders the Work email field', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
  });

  it('renders the Role & team size field', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
  });

  it('renders the responsibility textarea', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/recurring responsibility/i)).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<ContactSection />);
    expect(screen.getByRole('button', { name: /book my workflow x-ray/i })).toBeInTheDocument();
  });

  it('renders the Calendly alternative link', () => {
    render(<ContactSection />);
    expect(screen.getByRole('link', { name: /pick a time on calendly/i })).toBeInTheDocument();
  });

  it('renders the pre-submit form note', () => {
    render(<ContactSection />);
    expect(screen.getByText(/We reply within one working day/i)).toBeInTheDocument();
  });

  it('renders the email address', () => {
    render(<ContactSection />);
    expect(screen.getByText('dhaivat@exergiclabs.com')).toBeInTheDocument();
  });
});

// ─── Form fields ───────────────────────────────────────────────────────────────

describe('ContactSection — form interaction', () => {
  it('accepts text in the Name field', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const input = screen.getByLabelText(/^Name$/i) as HTMLInputElement;
    await user.type(input, 'Dhaivat');
    expect(input.value).toBe('Dhaivat');
  });

  it('accepts text in the Work email field', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const input = screen.getByLabelText(/work email/i) as HTMLInputElement;
    await user.type(input, 'test@company.com');
    expect(input.value).toBe('test@company.com');
  });

  it('accepts text in the responsibility textarea', async () => {
    render(<ContactSection />);
    const user = userEvent.setup();
    const ta = screen.getByLabelText(/recurring responsibility/i) as HTMLTextAreaElement;
    await user.type(ta, 'Meeting follow-through');
    expect(ta.value).toBe('Meeting follow-through');
  });

  it('name field is required', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/^Name$/i)).toBeRequired();
  });

  it('work email field is required', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/work email/i)).toBeRequired();
  });

  it('responsibility textarea is required', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/recurring responsibility/i)).toBeRequired();
  });

  it('role field is not required', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/role/i)).not.toBeRequired();
  });
});

// ─── Submit state ──────────────────────────────────────────────────────────────

describe('ContactSection — sent state', () => {
  async function submitForm() {
    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/^Name$/i), 'Test User');
    await user.type(screen.getByLabelText(/work email/i), 'test@test.com');
    await user.type(screen.getByLabelText(/recurring responsibility/i), 'Meetings');
    await user.click(screen.getByRole('button', { name: /book my workflow x-ray/i }));
  }

  it('shows confirmation note after submit', async () => {
    render(<ContactSection />);
    await submitForm();
    expect(screen.getByText(/on their way to dhaivat@exergiclabs.com/i)).toBeInTheDocument();
  });

  it('opens Calendly in a new window on submit', async () => {
    render(<ContactSection />);
    await submitForm();
    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringContaining('calendly.com'),
      '_blank',
      'noopener'
    );
  });
});
