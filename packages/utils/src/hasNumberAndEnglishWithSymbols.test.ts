import { describe, it, expect } from 'vitest';

import { hasNumberAndEnglishWithSymbols } from './hasNumberAndEnglishWithSymbols.ts';

describe('hasNumberAndEnglishWithSymbols', () => {
  it('should return false for a string with only numbers', () => {
    expect(hasNumberAndEnglishWithSymbols('123456')).toBe(false);
  });

  it('should return false for a string with only uppercase English letters', () => {
    expect(hasNumberAndEnglishWithSymbols('ABCDEF')).toBe(false);
  });

  it('should return false for a string with only lowercase English letters', () => {
    expect(hasNumberAndEnglishWithSymbols('abcdef')).toBe(false);
  });

  it('should return true for a string with mixed numbers and English letters', () => {
    expect(hasNumberAndEnglishWithSymbols('tlaalstjd1')).toBe(true);
  });

  it('should return true for a string with special characters', () => {
    expect(hasNumberAndEnglishWithSymbols('abc123!@#')).toBe(true);
  });

  it('should return false for a string with spaces', () => {
    expect(hasNumberAndEnglishWithSymbols('abc 123')).toBe(false);
  });

  it('should return false for a string with non-English letters', () => {
    expect(hasNumberAndEnglishWithSymbols('abc123한글')).toBe(false);
  });

  it('should return false for a string with non-English letters', () => {
    expect(hasNumberAndEnglishWithSymbols('abc123漢字')).toBe(false);
  });

  it('should return true for a string with all accepted special characters', () => {
    expect(hasNumberAndEnglishWithSymbols('1a!"#$%&\'()*+,-./:;<=>?@[\\]^_{|}~₩')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(hasNumberAndEnglishWithSymbols('')).toBe(false);
  });

  it('should return false for a string with illegal special characters', () => {
    expect(hasNumberAndEnglishWithSymbols('!!!')).toBe(false);
  });
});
