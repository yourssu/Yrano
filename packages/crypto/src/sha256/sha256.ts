import { Common } from './common';
import { SHA256_DIGEST_BLOCKLEN, SHA256_DIGEST_VALUELEN } from './sha256.constant';
import { SHA256_INFO } from './sha256.type';

export class SHA256 {
  private static readonly ENDIAN = Common.BIG_ENDIAN;

  private static readonly SHA256_K: Int32Array = new Int32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ]);

  private static ROTR_ULONG(x: number, n: number): number {
    return Common.URShift(x, n) | (x << (32 - n));
  }

  private static BIG_D2B(D: number, B: Uint8Array, B_offset: number): void {
    Common.int_to_byte_unit(B, B_offset, D, this.ENDIAN);
  }

  private static RR(x: number, n: number): number {
    return SHA256.ROTR_ULONG(x, n);
  }

  private static SS(x: number, n: number): number {
    return Common.URShift(x, n);
  }

  private static Ch(x: number, y: number, z: number): number {
    return (x & y) ^ (~x & z);
  }

  private static Maj(x: number, y: number, z: number): number {
    return (x & y) ^ (x & z) ^ (y & z);
  }

  private static Sigma0(x: number): number {
    return this.RR(x, 2) ^ this.RR(x, 13) ^ this.RR(x, 22);
  }

  private static Sigma1(x: number): number {
    return this.RR(x, 6) ^ this.RR(x, 11) ^ this.RR(x, 25);
  }

  private static RHO0(x: number): number {
    return this.RR(x, 7) ^ this.RR(x, 18) ^ this.SS(x, 3);
  }

  private static RHO1(x: number): number {
    return this.RR(x, 17) ^ this.RR(x, 19) ^ this.SS(x, 10);
  }

  private static abcdefgh_a = 0;
  private static abcdefgh_b = 1;
  private static abcdefgh_c = 2;
  private static abcdefgh_d = 3;
  private static abcdefgh_e = 4;
  private static abcdefgh_f = 5;
  private static abcdefgh_g = 6;
  private static abcdefgh_h = 7;

  private static FF(
    abcdefgh: Int32Array,
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number,
    X: Int32Array,
    j: number
  ): void {
    const T1 =
      Common.intToUnsigned(abcdefgh[h]) +
      Common.intToUnsigned(this.Sigma1(abcdefgh[e])) +
      Common.intToUnsigned(this.Ch(abcdefgh[e], abcdefgh[f], abcdefgh[g])) +
      Common.intToUnsigned(this.SHA256_K[j]) +
      Common.intToUnsigned(X[j]);
    abcdefgh[d] += T1;
    abcdefgh[h] = Common.toInt32(
      T1 +
        Common.intToUnsigned(this.Sigma0(abcdefgh[a])) +
        Common.intToUnsigned(this.Maj(abcdefgh[a], abcdefgh[b], abcdefgh[c]))
    );
  }

  private static GetData(x: Uint8Array, x_offset: number): number {
    return Common.byte_to_int_single(x, x_offset, this.ENDIAN);
  }

  private static SHA256_Transform(Message: Uint8Array, ChainVar: Int32Array): void {
    const abcdefgh: Int32Array = new Int32Array(8);
    const X: Int32Array = new Int32Array(64);
    let j: number;

    for (j = 0; j < 16; j++) X[j] = this.GetData(Message, j * 4);

    for (j = 16; j < 64; j++)
      X[j] = Common.toInt32(
        Common.intToUnsigned(this.RHO1(X[j - 2])) +
          Common.intToUnsigned(X[j - 7]) +
          Common.intToUnsigned(this.RHO0(X[j - 15])) +
          Common.intToUnsigned(X[j - 16])
      );

    abcdefgh[this.abcdefgh_a] = ChainVar[0];
    abcdefgh[this.abcdefgh_b] = ChainVar[1];
    abcdefgh[this.abcdefgh_c] = ChainVar[2];
    abcdefgh[this.abcdefgh_d] = ChainVar[3];
    abcdefgh[this.abcdefgh_e] = ChainVar[4];
    abcdefgh[this.abcdefgh_f] = ChainVar[5];
    abcdefgh[this.abcdefgh_g] = ChainVar[6];
    abcdefgh[this.abcdefgh_h] = ChainVar[7];

    for (j = 0; j < 64; j += 8) {
      this.FF(
        abcdefgh,
        this.abcdefgh_a,
        this.abcdefgh_b,
        this.abcdefgh_c,
        this.abcdefgh_d,
        this.abcdefgh_e,
        this.abcdefgh_f,
        this.abcdefgh_g,
        this.abcdefgh_h,
        X,
        j
      );
      this.FF(
        abcdefgh,
        this.abcdefgh_h,
        this.abcdefgh_a,
        this.abcdefgh_b,
        this.abcdefgh_c,
        this.abcdefgh_d,
        this.abcdefgh_e,
        this.abcdefgh_f,
        this.abcdefgh_g,
        X,
        j + 1
      );
      this.FF(
        abcdefgh,
        this.abcdefgh_g,
        this.abcdefgh_h,
        this.abcdefgh_a,
        this.abcdefgh_b,
        this.abcdefgh_c,
        this.abcdefgh_d,
        this.abcdefgh_e,
        this.abcdefgh_f,
        X,
        j + 2
      );
      this.FF(
        abcdefgh,
        this.abcdefgh_f,
        this.abcdefgh_g,
        this.abcdefgh_h,
        this.abcdefgh_a,
        this.abcdefgh_b,
        this.abcdefgh_c,
        this.abcdefgh_d,
        this.abcdefgh_e,
        X,
        j + 3
      );
      this.FF(
        abcdefgh,
        this.abcdefgh_e,
        this.abcdefgh_f,
        this.abcdefgh_g,
        this.abcdefgh_h,
        this.abcdefgh_a,
        this.abcdefgh_b,
        this.abcdefgh_c,
        this.abcdefgh_d,
        X,
        j + 4
      );
      this.FF(
        abcdefgh,
        this.abcdefgh_d,
        this.abcdefgh_e,
        this.abcdefgh_f,
        this.abcdefgh_g,
        this.abcdefgh_h,
        this.abcdefgh_a,
        this.abcdefgh_b,
        this.abcdefgh_c,
        X,
        j + 5
      );
      this.FF(
        abcdefgh,
        this.abcdefgh_c,
        this.abcdefgh_d,
        this.abcdefgh_e,
        this.abcdefgh_f,
        this.abcdefgh_g,
        this.abcdefgh_h,
        this.abcdefgh_a,
        this.abcdefgh_b,
        X,
        j + 6
      );
      this.FF(
        abcdefgh,
        this.abcdefgh_b,
        this.abcdefgh_c,
        this.abcdefgh_d,
        this.abcdefgh_e,
        this.abcdefgh_f,
        this.abcdefgh_g,
        this.abcdefgh_h,
        this.abcdefgh_a,
        X,
        j + 7
      );
    }

    ChainVar[0] += abcdefgh[this.abcdefgh_a];
    ChainVar[1] += abcdefgh[this.abcdefgh_b];
    ChainVar[2] += abcdefgh[this.abcdefgh_c];
    ChainVar[3] += abcdefgh[this.abcdefgh_d];
    ChainVar[4] += abcdefgh[this.abcdefgh_e];
    ChainVar[5] += abcdefgh[this.abcdefgh_f];
    ChainVar[6] += abcdefgh[this.abcdefgh_g];
    ChainVar[7] += abcdefgh[this.abcdefgh_h];
  }

  public static SHA256_Init(info: SHA256_INFO): void {
    info.uChainVar[0] = 0x6a09e667;
    info.uChainVar[1] = 0xbb67ae85;
    info.uChainVar[2] = 0x3c6ef372;
    info.uChainVar[3] = 0xa54ff53a;
    info.uChainVar[4] = 0x510e527f;
    info.uChainVar[5] = 0x9b05688c;
    info.uChainVar[6] = 0x1f83d9ab;
    info.uChainVar[7] = 0x5be0cd19;

    info.uHighLength = info.uLowLength = info.remainNum = 0;
  }

  public static SHA256_Process(info: SHA256_INFO, pszMessage: Uint8Array, uDataLen: number): void {
    let pszMessageOffset = info.remainNum;

    // Update the length of the processed message in bits
    if ((info.uLowLength += uDataLen << 3) < 0) {
      info.uHighLength++;
    }

    info.uHighLength += Common.URShift(uDataLen, 29);

    let offset = 0;

    while (uDataLen + pszMessageOffset >= SHA256_DIGEST_BLOCKLEN) {
      Common.arraycopy_offset(
        info.szBuffer,
        pszMessageOffset,
        pszMessage,
        offset,
        SHA256_DIGEST_BLOCKLEN - pszMessageOffset
      );
      this.SHA256_Transform(info.szBuffer, info.uChainVar);
      offset += SHA256_DIGEST_BLOCKLEN - pszMessageOffset;
      uDataLen -= SHA256_DIGEST_BLOCKLEN - pszMessageOffset;
      pszMessageOffset = 0;
    }

    // Copy remaining data to buffer
    Common.arraycopy_offset(info.szBuffer, pszMessageOffset, pszMessage, offset, uDataLen);
    info.remainNum = pszMessageOffset + uDataLen;
  }

  public static SHA256_Close(info: SHA256_INFO, pszDigest: Uint8Array): void {
    let i, Index;

    Index = Common.URShift(info.uLowLength, 3) % SHA256_DIGEST_BLOCKLEN;
    info.szBuffer[Index++] = 0x80;

    if (Index > SHA256_DIGEST_BLOCKLEN - 8) {
      Common.arrayinit_offset(info.szBuffer, Index, 0, SHA256_DIGEST_BLOCKLEN - Index);
      this.SHA256_Transform(info.szBuffer, info.uChainVar);
      Common.arrayinit(info.szBuffer, 0, SHA256_DIGEST_BLOCKLEN - 8);
    } else {
      Common.arrayinit_offset(info.szBuffer, Index, 0, SHA256_DIGEST_BLOCKLEN - Index - 8);
    }

    Common.int_to_byte_unit(
      info.szBuffer,
      (SHA256_DIGEST_BLOCKLEN / 4 - 2) * 4,
      info.uHighLength,
      this.ENDIAN
    );
    Common.int_to_byte_unit(
      info.szBuffer,
      (SHA256_DIGEST_BLOCKLEN / 4 - 1) * 4,
      info.uLowLength,
      this.ENDIAN
    );

    this.SHA256_Transform(info.szBuffer, info.uChainVar);

    for (i = 0; i < SHA256_DIGEST_VALUELEN; i += 4)
      this.BIG_D2B(info.uChainVar[i / 4], pszDigest, i);
  }

  public static SHA256_Encrpyt(
    pszMessage: Uint8Array,
    uPlainTextLen: number,
    pszDigest: Uint8Array
  ): void {
    const info = new SHA256_INFO();
    this.SHA256_Init(info);
    this.SHA256_Process(info, pszMessage, uPlainTextLen);
    this.SHA256_Close(info, pszDigest);
  }
}
