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

  it('should return the correct hash for a long string', () => {
    expect(encrypt('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBe(
      'a58dd8680234c1f8cc2ef2b325a43733605a7f16f288e072de8eae81fd8d6433'
    );
  });

  it('should return the correct hash for a super long string', () => {
    expect(
      encrypt(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
    ).toBe('a190e90a2a184c077b7fbf9dbc3fd71c07de809b93485538580b5d075b9e466c');
  });

  it('should return the correct hash for a string with special characters', () => {
    expect(encrypt('!@#@#s@W$$)#%(#%)_%#*($*!&(*&@#__(@#$(+%(')).toBe(
      '335efcb347be1921fdd906802d0aa06c81c187c7ffde86f7bbc760441daca7c4'
    );
  });
});
