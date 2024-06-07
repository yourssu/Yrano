import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * `useSecTimer` 커스텀 훅은 주어진 시간(초)을 카운트다운하는 타이머 기능을 제공합니다.
 *
 * @param {number} seconds - 카운트다운할 시간(초)입니다.
 * @returns {object} 타이머 상태와 타이머를 재설정하는 함수를 반환합니다.
 */
export const useSecTimer = (seconds: number) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [leftTime, setLeftTime] = useState(seconds);

  const resetTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      setLeftTime(seconds);
    }

    intervalRef.current = setInterval(() => {
      if (intervalRef.current === null) {
        return;
      }

      setLeftTime((prev) => {
        const next = Math.max(prev - 1, 0);

        if (next === 0) {
          clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
          intervalRef.current = null;
        }

        return next;
      });
    }, 1000);
  }, [seconds]);

  useEffect(() => {
    resetTimer();

    return () => {
      clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
    };
  }, [resetTimer]);

  return {
    leftTime,
    isTimerEnd: leftTime === 0,
    resetTimer,
  };
};
