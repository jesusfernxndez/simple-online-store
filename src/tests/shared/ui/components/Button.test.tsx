import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/shared/ui/components/Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-linear-to-r from-purple-600 to-violet-600');
  });

  it('renders with different variants', () => {
    render(
      <>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </>,
    );

    const secondaryButton = screen.getByRole('button', { name: /secondary/i });
    const dangerButton = screen.getByRole('button', { name: /danger/i });

    expect(secondaryButton).toHaveClass('border-2 border-purple-600/40');
    expect(dangerButton).toHaveClass('bg-red-600 shadow-red-600/40');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:cursor-not-allowed disabled:opacity-50');
  });

  it('renders with full width when specified', () => {
    render(<Button fullWidth>Full Width</Button>);

    const button = screen.getByRole('button', { name: /full width/i });
    expect(button).toHaveClass('w-full');
  });
});
