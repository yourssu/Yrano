import CryptoJS from 'crypto-js';
import { describe, it, expect } from 'vitest';

import { base64Encode } from './base64Encode';
import { sha256 } from './sha256';

describe('base64Encode', () => {
  it('should encode a string to base64', () => {
    expect(base64Encode('hello world')).toBe(
      CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse('hello world')).toString()
    );
  });

  it('should encode a very long string to base64', () => {
    expect(
      base64Encode(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      )
    ).toBe(
      CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Utf8.parse(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        )
      ).toString()
    );
  });

  it('should encode an empty sha256 hash value to base64', () => {
    expect(base64Encode(sha256(''))).toBe(
      CryptoJS.enc.Base64.stringify(CryptoJS.SHA256('')).toString()
    );
  });

  it('should encode a sha256 hash value to base64', () => {
    expect(base64Encode('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')).toBe(
      CryptoJS.enc.Base64.stringify(
        CryptoJS.SHA256('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')
      ).toString()
    );
  });
});
