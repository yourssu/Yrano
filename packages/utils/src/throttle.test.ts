import { describe, it, expect, vi } from 'vitest';

import { throttle } from './throttle';

describe('throttle', () => {
  it('should throttle function calls', async () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should execute the function immediately if not called within the wait time', async () => {
    const func = vi.fn();
    const throttleMs = 50;
    const throttledFunc = throttle(func, throttleMs);

    throttledFunc();
    await new Promise((resolve) => {
      setTimeout(resolve, throttleMs / 2);
    });
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);

    await new Promise((resolve) => {
      setTimeout(resolve, throttleMs / 2 + 1);
    });
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the function with correct arguments', async () => {
    const func = vi.fn();
    const throttleMs = 50;
    const throttledFunc = throttle(func, throttleMs);

    throttledFunc('test', 123);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith('test', 123);
  });
});
