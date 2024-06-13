import CryptoJS from 'crypto-js';
import { expect, it } from 'vitest';

import { hexToUtf8 } from './hexToUtf8.ts';

it('should convert hex to utf8 correctly', () => {
  expect(hexToUtf8(CryptoJS.enc.Utf8.parse('test').toString(CryptoJS.enc.Hex))).toBe('test');
});
