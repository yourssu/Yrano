export function hexToUtf8(hex: string) {
  let utf8 = '';
  for (let i = 0; i < hex.length; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2), 16);
    utf8 += String.fromCharCode(byte);
  }
  return utf8;
}
