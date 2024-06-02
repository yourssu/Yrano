import { describe, it, expect } from 'vitest';

import { hasOnlyNumberAndEnglish } from './hasOnlyNumberAndEnglish';

describe('hasOnlyNumberAndEnglish', () => {
  it('should return true for a string with only numbers', () => {
    expect(hasOnlyNumberAndEnglish('123456')).toBe(false);
  });

  it('should return true for a string with only uppercase English letters', () => {
    expect(hasOnlyNumberAndEnglish('ABCDEF')).toBe(false);
  });

  it('should return true for a string with only lowercase English letters', () => {
    expect(hasOnlyNumberAndEnglish('abcdef')).toBe(false);
  });

  it('should return true for a string with mixed numbers and English letters', () => {
    expect(hasOnlyNumberAndEnglish('abc123DEF')).toBe(true);
  });

  it('should return false for a string with special characters', () => {
    expect(hasOnlyNumberAndEnglish('abc123!@#')).toBe(false);
  });

  it('should return false for a string with spaces', () => {
    expect(hasOnlyNumberAndEnglish('abc 123')).toBe(false);
  });

  it('should return false for a string with non-English letters', () => {
    expect(hasOnlyNumberAndEnglish('abc123한글')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(hasOnlyNumberAndEnglish('321')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(hasOnlyNumberAndEnglish('')).toBe(true);
  });
});
