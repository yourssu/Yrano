/**
 * Creates a throttled function that only invokes the provided function at most once
 * per every `throttleMs` milliseconds. Subsequent calls to the throttled function
 * within the wait time will not trigger the execution of the original function.
 *
 * @param {F} func - The function to throttle.
 * @param {number} throttleMs - The number of milliseconds to throttle executions to.
 * @returns {F} A new throttled function that accepts the same parameters as the original function.
 */
export function throttle<F extends (...args: any[]) => void>(func: F, throttleMs: number): F {
  let lastCallTime: number | null;

  const throttledFunction = function (...args: Parameters<F>) {
    const now = Date.now();

    if (lastCallTime == null || now - lastCallTime >= throttleMs) {
      lastCallTime = now;
      func(...args);
    }
  } as F;

  return throttledFunction;
}
