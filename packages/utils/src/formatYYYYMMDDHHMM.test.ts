import { describe, it, expect } from 'vitest';

import { formatYYYYMMDDHHMM } from './formatYYYYMMDDHHMM';

describe('formatYYYYMMDDHHMM', () => {
  it('should "2024-06-14T03:12:32" parsed to "2024.06.14 03:12".', () => {
    expect(formatYYYYMMDDHHMM('2024-06-14T03:12:32')).toEqual('2024.06.14 03:12');
  });

  it('should throw error when month is invalid.', () => {
    expect(() => formatYYYYMMDDHHMM('2024-13-14T00:00:00')).toThrowError('Invalid date format');
    expect(() => formatYYYYMMDDHHMM('2024-24-14T00:00:00')).toThrowError('Invalid date format');
    expect(() => formatYYYYMMDDHHMM('2024-31-14T00:00:00')).toThrowError('Invalid date format');
  });

  it('should throw error when day is invalid.', () => {
    expect(() => formatYYYYMMDDHHMM('2024-06-32T00:00:00')).toThrowError('Invalid date format');
    expect(() => formatYYYYMMDDHHMM('2024-06-42T00:00:00')).toThrowError('Invalid date format');
    expect(() => formatYYYYMMDDHHMM('2024-06-50T00:00:00')).toThrowError('Invalid date format');
  });

  it('should throw error when hour is invalid.', () => {
    expect(() => formatYYYYMMDDHHMM('2024-06-14T25:00:00')).toThrowError('Invalid date format');
    expect(() => formatYYYYMMDDHHMM('2024-06-14T36:00:00')).toThrowError('Invalid date format');
    expect(() => formatYYYYMMDDHHMM('2024-06-14T49:00:00')).toThrowError('Invalid date format');
  });

  it('should throw error when minute is invalid.', () => {
    expect(() => formatYYYYMMDDHHMM('2024-06-14T00:70:00')).toThrowError('Invalid date format');
    expect(() => formatYYYYMMDDHHMM('2024-06-14T00:82:00')).toThrowError('Invalid date format');
    expect(() => formatYYYYMMDDHHMM('2024-06-14T00:94:00')).toThrowError('Invalid date format');
  });

  it('should throw error when hour is missing.', () => {
    expect(() => formatYYYYMMDDHHMM('2024-06-14T:00:00')).toThrowError('Invalid date format');
  });

  it('should throw error when minute is missing.', () => {
    expect(() => formatYYYYMMDDHHMM('2024-06-14T00::00')).toThrowError('Invalid date format');
  });
});
