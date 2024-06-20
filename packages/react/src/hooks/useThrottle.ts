import { useCallback, useEffect, useMemo, useRef } from 'react';

import { throttle } from '@yourssu/utils';

export function useThrottle<F extends (...args: any[]) => any>(callback: F, wait: number) {
  const usePreservedCallback = function (callback: F) {
    const callbackRef = useRef(callback);

    useEffect(() => {
      callbackRef.current = callback;
    }, [callback]);

    return useCallback((...args: Parameters<F>) => {
      return callbackRef.current(...args);
    }, []);
  };

  const preservedCallback = usePreservedCallback(callback);

  const throttled = useMemo(() => {
    return throttle(preservedCallback, wait);
  }, [preservedCallback, wait]);

  useEffect(() => {
    return () => {
      throttled.cancel();
    };
  }, [throttled]);

  return throttled;
}
