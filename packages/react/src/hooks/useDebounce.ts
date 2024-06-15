import { useCallback, useEffect, useMemo, useRef } from 'react';

import { debounce } from '@yourssu/utils';

export function useDebounce<F extends (...args: any[]) => any>(callback: F, wait: number) {
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

  const debounced = useMemo(() => {
    return debounce(preservedCallback, wait);
  }, [preservedCallback, wait]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
