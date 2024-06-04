import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { useMediaQuery } from './useMediaQuery';

// Browser environment
describe('useMediaQuery - Browser', () => {
  it('should return true when the query matches', () => {
    const query = '(min-width: 600px)';

    // setting jsdom environment
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query === '(min-width: 600px)',
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    });

    const { result } = renderHook(() => useMediaQuery(query));
    expect(result.current).toBe(true);
  });

  it('should return false when the query does not match', () => {
    const query = '(max-width: 599px)';

    // setting jsdom environment
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query === '(max-width: 599px)',
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    });

    const { result } = renderHook(() => useMediaQuery(query));
    expect(result.current).toBe(true);
  });
});

// Node.js environment
describe('useMediaQuery - Node.js', () => {
  it('should return false when running on server side', () => {
    const query = '(min-width: 600px)';

    const { result } = renderHook(() => useMediaQuery(query));
    expect(result.current).toBe(false);
  });
});
