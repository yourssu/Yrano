import { useCallback, useRef, useState } from 'react';

export const usePreventDuplicateClick = () => {
  const [disabled, setDisabled] = useState(false);
  const loadingRef = useRef(false);

  const handleClick = useCallback(async (callback: () => Promise<void>) => {
    if (loadingRef.current) return;

    loadingRef.current = true;
    setDisabled(true);

    await callback();

    loadingRef.current = false;
    setDisabled(false);
  }, []);

  return { disabled, handleClick };
};
