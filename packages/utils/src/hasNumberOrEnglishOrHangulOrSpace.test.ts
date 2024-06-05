import { describe, it, expect } from 'vitest';

import { hasNumberOrEnglishOrHangulOrSpace } from './hasNumberOrEnglishOrHangulOrSpace';

describe('hasNumberOrEnglishOrHangulOrSpace', () => {
  it('should return true for a string with only numbers', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('123456')).toBe(true);
  });

  it('should return true for a string with only uppercase English letters', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('ABCDEF')).toBe(true);
  });

  it('should return true for a string with only lowercase English letters', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('abcdef')).toBe(true);
  });

  it('should return true for a string with mixed numbers and English letters', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('abc123DEF')).toBe(true);
  });

  it('should return true for a string with only Hangul syllables', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('한글테스트')).toBe(true);
  });

  it('should return true for a string with mixed Hangul and numbers', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('한글123')).toBe(true);
  });

  it('should return true for a string with mixed Hangul and English letters', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('한글abcDEF')).toBe(true);
  });

  it('should return false for a string with special characters', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('abc123!@#')).toBe(false);
  });

  it('should return true for a string with spaces', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('한글 abc 123')).toBe(true);
  });

  it('should return false for a string with non-Hangul, non-English letters', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('abc123漢字')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace('')).toBe(false);
  });

  it('should return true for a string with only space', () => {
    expect(hasNumberOrEnglishOrHangulOrSpace(' ')).toBe(true);
  });
});
