interface DebounceOptions {
  signal?: AbortSignal;
}

/**
 * Creates a debounced function that delays invoking the provided function until after `debounceMs` milliseconds
 * have elapsed since the last time the debounced function was invoked. The debounced function also has a `cancel`
 * method to cancel any pending execution.
 *
 * @param {F} func - The function to debounce.
 * @param {number} debounceMs - The number of milliseconds to delay.
 * @param {DebounceOptions} options - The options object.
 * @param {AbortSignal} options.signal - An optional AbortSignal to cancel the debounced function.
 * @returns {F & { cancel: () => void }} A new debounced function with a `cancel` method.
 */
export function debounce<F extends (...args: any[]) => void>(
  func: F,
  debounceMs: number,
  { signal }: DebounceOptions = {}
): F & { cancel: () => void } {
  let timeoutId: number | NodeJS.Timeout | null = null;

  const debounced = function (...args: Parameters<F>) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    if (signal?.aborted) {
      return;
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, debounceMs);
  } as F & { cancel: () => void };

  const onAbort = function () {
    debounced.cancel();
  };

  debounced.cancel = function () {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  signal?.addEventListener('abort', onAbort, { once: true });

  return debounced;
}
