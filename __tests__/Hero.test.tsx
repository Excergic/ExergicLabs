import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Hero from '../app/components/Hero';

describe('Workflow inspection', () => {
  it('starts with the account and no pretend video', () => {
    const { container } = render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Data to Deal');
    expect(screen.getByText('FinBursa')).toBeVisible();
    expect(screen.queryByText('blackrock.com')).not.toBeInTheDocument();
    expect(container.querySelector('video')).toBeNull();
  });

  it('opens from the hero CTA, focuses the inspection, and keeps both decisions visible', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    await user.click(screen.getByRole('button', { name: 'Explore the workflow' }));
    expect(document.activeElement).toHaveAttribute('id', 'workflow-inspection');
    expect(screen.getByText('blackrock.com')).toBeVisible();
    expect(screen.getByText('Deliverable')).toBeVisible();
    expect(screen.getByText('Hold for review')).toBeVisible();
    expect(screen.getByText('Warehouse status: Ready — unchanged.')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Reset view' }));
    expect(screen.queryByText('blackrock.com')).not.toBeInTheDocument();
  });

  it('opens with the keyboard', async () => {
    const user = userEvent.setup();
    render(<Hero />);
    const inspect = screen.getByRole('button', { name: 'Inspect decision' });
    inspect.focus();
    await user.keyboard('{Enter}');
    expect(within(document.getElementById('workflow-inspection')!).getByText('Hold for review')).toBeVisible();
  });
});

beforeAll(() => {
  Element.prototype.scrollIntoView = jest.fn();
});
