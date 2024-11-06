import '@testing-library/jest-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { usePreventDuplicateClick } from './usePreventDuplicateClick';
import { describe, it, expect, vi } from 'vitest';

const TestComponent = ({ callback }: { callback: () => Promise<void> }) => {
  const { disabled, handleClick } = usePreventDuplicateClick();

  return (
    <button onClick={() => handleClick(callback)} disabled={disabled}>
      Click me
    </button>
  );
};

describe('usePreventDuplicateClick', () => {
  it('should disable click during callback execution and enable after', async () => {
    const callback = vi.fn().mockImplementation(() => {
      return new Promise<void>((resolve) => setTimeout(resolve, 100));
    });

    const { getByText } = render(<TestComponent callback={callback} />);
    const button = getByText('Click me');

    // Initial state
    expect(button).not.toBeDisabled();

    // Act: simulate click
    fireEvent.click(button);

    // Check if disabled during callback
    expect(button).toBeDisabled();

    // Wait for callback to finish
    await waitFor(() => expect(button).not.toBeDisabled());

    // Check that the callback was called
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not allow multiple clicks', async () => {
    const callback = vi.fn().mockImplementation(() => {
      return new Promise<void>((resolve) => setTimeout(resolve, 100));
    });

    const { getByText } = render(<TestComponent callback={callback} />);
    const button = getByText('Click me');

    // Act: simulate first click
    fireEvent.click(button);

    // Act: simulate second click before the first one completes
    fireEvent.click(button);

    // Check if disabled during callback
    expect(button).toBeDisabled();

    // Wait for callback to finish
    await waitFor(() => expect(button).not.toBeDisabled());

    // Check that the callback was called only once
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
