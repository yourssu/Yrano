import { describe, it, expect } from 'vitest';

import { base64Encode } from './base64Encode';

describe('base64Encode', () => {
  it('should encode a string to base64', () => {
    expect(base64Encode('hello world')).toBe('aGVsbG8gd29ybGQ=');
  });
});
