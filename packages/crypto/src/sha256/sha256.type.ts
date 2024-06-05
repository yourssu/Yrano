import { SHA256_DIGEST_BLOCKLEN, SHA256_DIGEST_VALUELEN } from './sha256.constant';

export class SHA256_INFO {
  public uChainVar: Int32Array = new Int32Array(SHA256_DIGEST_VALUELEN / 4);
  public uHighLength: number = 0;
  public uLowLength: number = 0;
  public remainNum: number = 0;
  public szBuffer: Uint8Array = new Uint8Array(SHA256_DIGEST_BLOCKLEN);
}
