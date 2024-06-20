import { renderHook, act } from '@testing-library/react';
import { throttle } from '@yourssu/utils';
import { describe, it, expect, vi } from 'vitest';

import { useThrottle } from './useThrottle';

describe('useThrottle', () => {
  vi.useFakeTimers();

  it('should call the callback after the wait time', () => {
    const callback = vi.fn();
    const wait = 1000;
    const { result } = renderHook(() => useThrottle(callback, wait));

    act(() => {
      result.current();
      vi.advanceTimersByTime(wait);
    });

    expect(callback).toHaveBeenCalled();
  });

  it('should throttle the callback calls', () => {
    const callback = vi.fn();
    const wait = 1000;
    const { result } = renderHook(() => useThrottle(callback, wait));

    act(() => {
      result.current();
      result.current();
      result.current();
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
