import { describe, it, expect } from 'vitest';

import { encrypt } from './encrypt';

describe('encrypt', () => {
  it('should return the correct hash for a string', () => {
    expect(encrypt('hello')).toBe(
      '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
    );
  });

  it('should return the correct hash for an empty string', () => {
    expect(encrypt('')).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  });

  it('should return the correct hash for a string with numbers', () => {
    expect(encrypt('안녕하세요')).toBe(
      '2c68318e352971113645cbc72861e1ec23f48d5baa5f9b405fed9dddca893eb4'
    );
  });
});
