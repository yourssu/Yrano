import { describe, expect, it } from 'vitest';
import { isEmail } from './isEmail';

describe('isEmail', () => {
  it('should return full Email if given value is valid', () => {
    expect(isEmail('stella@yourssu.com')).toEqual('stella@yourssu.com');
    expect(isEmail('stella', '@yourssu.com')).toEqual('stella@yourssu.com');
  });

  it('should return Error if given value is not valid', () => {
    expect(() => isEmail('')).toThrowError('given value is not valid');
    expect(() => isEmail('stella')).toThrowError('given value is not valid');
    expect(() => isEmail('1234')).toThrowError('given value is not valid');
    expect(() => isEmail('stella@')).toThrowError('given value is not valid');
    expect(() => isEmail('stella@yourssu')).toThrowError('given value is not valid');
    expect(() => isEmail('stella@yourssu.')).toThrowError('given value is not valid');
    expect(() => isEmail('stella@yourssu.123')).toThrowError('given value is not valid');
    expect(() => isEmail('stella@yourssu.com123')).toThrowError('given value is not valid');
  });
});
