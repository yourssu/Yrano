import { describe, it, expect, vi } from 'vitest';

import { throttle } from './throttle';

describe('throttle', () => {
  it('should not call the function again before the throttle time', async () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the throttle time', async () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    await new Promise((resolve) => setTimeout(resolve, 150));
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the function immediately after cancel is called', async () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc.cancel();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should handle multiple calls with and without cancel', async () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    await new Promise((resolve) => setTimeout(resolve, 50));
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc.cancel();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);

    await new Promise((resolve) => setTimeout(resolve, 150));
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(3);
  });

  it('should support cancelling the throttle', () => {
    const func = vi.fn();
    const throttleMs = 100;
    const throttledFunc = throttle(func, throttleMs);

    throttledFunc();
    throttledFunc.cancel();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(2);
  });
});
