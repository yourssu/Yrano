import { useEffect, useState } from 'react';

/**
 * `useMediaQuery` 커스텀 훅은 뷰포트의 크기를 감지하고, 주어진 쿼리와 일치하는지 확인합니다.
 *
 * @param {string} query - 미디어 쿼리 문자열입니다.
 * @returns {boolean} 미디어 쿼리가 현재 뷰포트와 일치하는지 여부를 반환합니다.
 */
export const useMediaQuery = (query: string) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    // If window is not defined, it means that the code is running on the server side.
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    setIsMatch(mediaQuery.matches);

    const listener = () => setIsMatch(mediaQuery.matches);

    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, [query]);

  return isMatch;
};
