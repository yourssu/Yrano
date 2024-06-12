import CryptoJS from 'crypto-js';
import { describe, it, expect } from 'vitest';

import { sha256 } from './sha256.ts';

describe('sha256', () => {
  it('should return the correct hash for a string', () => {
    expect(sha256('hello')).toBe(CryptoJS.SHA256('hello').toString(CryptoJS.enc.Hex));
  });

  it('should return the correct hash for an empty string', () => {
    expect(sha256('')).toBe(CryptoJS.SHA256('').toString(CryptoJS.enc.Hex));
  });

  it('should return the correct hash for a long string', () => {
    expect(sha256('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBe(
      CryptoJS.SHA256('Lorem ipsum dolor sit amet, consectetur adipiscing elit.').toString(
        CryptoJS.enc.Hex
      )
    );
  });

  it('should return the correct hash for a super long string', () => {
    expect(
      sha256(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
    ).toBe(
      CryptoJS.SHA256(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ).toString(CryptoJS.enc.Hex)
    );
  });

  it('should return the correct hash for a string with special characters', () => {
    expect(sha256('!@#@#s@W$$)#%(#%)_%#*($*!&(*&@#__(@#$(+%(')).toBe(
      CryptoJS.SHA256('!@#@#s@W$$)#%(#%)_%#*($*!&(*&@#__(@#$(+%(').toString(CryptoJS.enc.Hex)
    );
  });
});
