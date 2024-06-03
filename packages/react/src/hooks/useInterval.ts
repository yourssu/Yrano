import { useEffect, useRef } from 'react';

interface UseIntervalProps {
  (callback: () => void, interval: number): void;
}

/**
 * `useInterval` 커스텀 훅은 특정 간격마다 주어진 콜백 함수를 실행합니다.
 *
 * @param {() => void} callback - 실행될 콜백 함수입니다.
 * @param {number} interval - 콜백 함수가 실행될 간격(밀리초)입니다.
 *
 * @remarks
 * 이 훅은 내부적으로 두 개의 `useEffect`를 사용합니다:
 * 1. 첫 번째 `useEffect`는 콜백 함수를 최신 상태로 유지합니다.
 * 2. 두 번째 `useEffect`는 주어진 간격마다 콜백 함수를 실행하는 타이머를 설정합니다.
 *
 * `interval`이 변경되거나 `null`로 설정되면 타이머가 갱신되거나 해제됩니다.
 */
export const useInterval: UseIntervalProps = (callback: () => void, interval: number) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (interval !== null) {
      const id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};
