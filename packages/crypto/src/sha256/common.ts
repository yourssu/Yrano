export class Common {
  public static readonly BIG_ENDIAN = 0;
  public static readonly LITTLE_ENDIAN = 1;

  public static arraycopy_offset(
    dst: Uint8Array,
    dst_offset: number,
    src: Uint8Array,
    src_offset: number,
    length: number
  ): void {
    for (let i = 0; i < length; i++) {
      dst[dst_offset + i] = src[src_offset + i];
    }
  }

  public static arrayinit(dst: Uint8Array, value: number, length: number): void {
    for (let i = 0; i < length; i++) {
      dst[i] = value;
    }
  }

  public static arrayinit_offset(
    dst: Uint8Array,
    dst_offset: number,
    value: number,
    length: number
  ): void {
    for (let i = 0; i < length; i++) {
      dst[dst_offset + i] = value;
    }
  }

  public static byte_to_int_single(src: Uint8Array, src_offset: number, ENDIAN: number): number {
    if (ENDIAN === this.BIG_ENDIAN) {
      return (
        ((0x0ff & src[src_offset]) << 24) |
        ((0x0ff & src[src_offset + 1]) << 16) |
        ((0x0ff & src[src_offset + 2]) << 8) |
        (0x0ff & src[src_offset + 3])
      );
    } else {
      return (
        (0x0ff & src[src_offset]) |
        ((0x0ff & src[src_offset + 1]) << 8) |
        ((0x0ff & src[src_offset + 2]) << 16) |
        ((0x0ff & src[src_offset + 3]) << 24)
      );
    }
  }

  public static int_to_byte_unit(
    dst: Uint8Array,
    dst_offset: number,
    src: number,
    ENDIAN: number
  ): void {
    if (ENDIAN === this.BIG_ENDIAN) {
      dst[dst_offset] = (src >> 24) & 0x0ff;
      dst[dst_offset + 1] = (src >> 16) & 0x0ff;
      dst[dst_offset + 2] = (src >> 8) & 0x0ff;
      dst[dst_offset + 3] = src & 0x0ff;
    } else {
      dst[dst_offset] = src & 0x0ff;
      dst[dst_offset + 1] = (src >> 8) & 0x0ff;
      dst[dst_offset + 2] = (src >> 16) & 0x0ff;
      dst[dst_offset + 3] = (src >> 24) & 0x0ff;
    }
  }

  public static URShift(x: number, n: number): number {
    if (n === 0) return x;
    if (n >= 32) return 0;
    const v = x >> n;
    const v_mask = ~(0x80000000 >> (n - 1));
    return v & v_mask;
  }

  public static readonly INT_RANGE_MAX = Math.pow(2, 32);

  public static intToUnsigned(x: number): number {
    return x >= 0 ? x : x + this.INT_RANGE_MAX;
  }
}
