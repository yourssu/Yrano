import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { useInterval } from './useInterval'; // Adjust the import path to your actual useInterval hook

describe('useInterval', () => {
  it('should call the callback function at the given interval', () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const interval = 1000;

    renderHook(() => useInterval(callback, interval));

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(interval);
    });

    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(interval);
    });

    expect(callback).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });

  it('should not call the callback function when the interval is null', () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const interval = null;

    renderHook(() => useInterval(callback, interval as unknown as number));

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(callback).not.toHaveBeenCalled();

    vi.useRealTimers();
  });

  it('should update the interval when the interval changes', () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    let interval = 1000;

    const { rerender } = renderHook(() => useInterval(callback, interval));

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(interval);
    });

    expect(callback).toHaveBeenCalledTimes(1);

    interval = 2000;

    rerender();

    act(() => {
      vi.advanceTimersByTime(interval);
    });

    expect(callback).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });
});
