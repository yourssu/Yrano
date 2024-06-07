import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { useSecTimer } from './useSecTimer';

// Utility function: advance timers by a specific amount of time
const advanceTimersByTime = (time: number) => {
  for (let i = 0; i < time / 1000; i++) {
    act(() => {
      vi.advanceTimersByTime(1000);
    });
  }
};

describe('useSecTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initializes with the correct time', () => {
    const { result } = renderHook(() => useSecTimer(10));
    expect(result.current.leftTime).toBe(10);
  });

  it('decrements the timer by 1 second each interval', () => {
    const { result } = renderHook(() => useSecTimer(10));
    advanceTimersByTime(3000);
    expect(result.current.leftTime).toBe(7);
  });

  it('sets isTimerEnd to true when the timer ends', () => {
    const { result } = renderHook(() => useSecTimer(3));
    advanceTimersByTime(3000);
    expect(result.current.leftTime).toBe(0);
    expect(result.current.isTimerEnd).toBe(true);
  });

  it('resets the timer correctly', () => {
    const { result } = renderHook(() => useSecTimer(10));
    advanceTimersByTime(5000);
    act(() => {
      result.current.resetTimer();
    });
    expect(result.current.leftTime).toBe(10);
  });

  it('continues to decrement after reset', () => {
    const { result } = renderHook(() => useSecTimer(10));
    advanceTimersByTime(5000);
    act(() => {
      result.current.resetTimer();
    });
    advanceTimersByTime(3000);
    expect(result.current.leftTime).toBe(7);
  });

  it('clears the timer when the component unmounts', () => {
    const { result, unmount } = renderHook(() => useSecTimer(10));
    advanceTimersByTime(5000);
    unmount();
    advanceTimersByTime(5000); // Timer should be stopped, so time should not change
    expect(result.current.leftTime).toBe(5);
  });

  it('handles multiple resets correctly', () => {
    const { result } = renderHook(() => useSecTimer(10));
    advanceTimersByTime(3000);
    act(() => {
      result.current.resetTimer();
    });
    advanceTimersByTime(2000);
    act(() => {
      result.current.resetTimer();
    });
    advanceTimersByTime(1000);
    expect(result.current.leftTime).toBe(9);
  });
});
