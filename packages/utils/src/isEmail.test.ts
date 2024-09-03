import { describe, expect, it } from 'vitest';
import { isEmail } from './isEmail';

describe('isEmail', () => {
  it('should return full Email if given value is valid', () => {
    expect(isEmail('stella@yourssu.com')).toEqual(true);
    expect(isEmail('stella', '@yourssu.com')).toEqual(true);
  });

  it('should return Error if given value is not valid', () => {
    expect(isEmail('')).toEqual(false);
    expect(isEmail('stella')).toEqual(false);
    expect(isEmail('1234')).toEqual(false);
    expect(isEmail('stella@')).toEqual(false);
    expect(isEmail('stella@yourssu')).toEqual(false);
    expect(isEmail('stella@yourssu.')).toEqual(false);
    expect(isEmail('stella@yourssu.123')).toEqual(false);
    expect(isEmail('stella@yourssu.com123')).toEqual(false);
    expect(isEmail('stella')).toEqual(false);
    expect(isEmail('', '@naver.com')).toEqual(false);
    expect(isEmail('@naver.com')).toEqual(false);
    expect(isEmail('stella', '@yourssu.com123')).toEqual(false);
    expect(isEmail('stella', '@yourssu')).toEqual(false);
  });
});
