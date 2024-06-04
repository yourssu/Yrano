import { SHA256 } from './sha256/sha256';

export function encrypt(data: string): string {
  const dataBytes = new TextEncoder().encode(data);

  // Create an array to hold the hash
  const hash = new Uint8Array(32);

  // Compute the hash
  SHA256.SHA256_Encrpyt(dataBytes, dataBytes.length, hash);

  // Convert the hash to a hexadecimal string
  let hashString = '';
  for (let i = 0; i < hash.length; i++) {
    hashString += hash[i].toString(16).padStart(2, '0');
  }

  return hashString;
}
