import { describe, expect, it } from 'vitest';
import { isEmail } from './isEmail';

describe('isEmail', () => {
  it('should return full Email if given value is valid', () => {
    expect(isEmail('stella@yourssu.com')).toEqual('stella@yourssu.com');
    expect(isEmail('stella', '@yourssu.com')).toEqual('stella@yourssu.com');
  });

  it('should return Error if given value is not valid', () => {
    expect(isEmail('')).toEqual(false);
    expect(isEmail('hyeonsu')).toEqual(false);
    expect(isEmail('1234')).toEqual(false);
    expect(isEmail('hyeonsu@')).toEqual(false);
    expect(isEmail('hyeonsu@toss')).toEqual(false);
    expect(isEmail('hyeonsu@toss.')).toEqual(false);
    expect(isEmail('hyeonsu@toss.123')).toEqual(false);
    expect(isEmail('hyeonsu@toss.com123')).toEqual(false);
  });
});
