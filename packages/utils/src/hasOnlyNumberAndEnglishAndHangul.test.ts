import { describe, it, expect } from 'vitest';

import { hasOnlyNumberAndEnglishAndHangul } from './hasOnlyNumberAndEnglishAndHangul';

describe('hasOnlyNumberAndEnglishAndHangul', () => {
  it('should return true for a string with only numbers', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('123456')).toBe(true);
  });

  it('should return true for a string with only uppercase English letters', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('ABCDEF')).toBe(true);
  });

  it('should return true for a string with only lowercase English letters', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('abcdef')).toBe(true);
  });

  it('should return true for a string with mixed numbers and English letters', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('abc123DEF')).toBe(true);
  });

  it('should return true for a string with only Hangul syllables', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('한글테스트')).toBe(true);
  });

  it('should return true for a string with mixed Hangul and numbers', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('한글123')).toBe(true);
  });

  it('should return true for a string with mixed Hangul and English letters', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('한글abcDEF')).toBe(true);
  });

  it('should return false for a string with special characters', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('abc123!@#')).toBe(false);
  });

  it('should return false for a string with spaces', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('한글 abc 123')).toBe(false);
  });

  it('should return false for a string with non-Hangul, non-English letters', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('abc123漢字')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(hasOnlyNumberAndEnglishAndHangul('')).toBe(true);
  });
});
