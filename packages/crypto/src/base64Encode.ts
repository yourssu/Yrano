export function base64Encode(data: string): string {
  const base64Chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let bins: string = '';

  for (let i = 0; i < data.length; i++) {
    const charCode: number = data.charCodeAt(i);
    const binary: string = charCode.toString(2).padStart(8, '0');
    bins += binary;
  }

  if (bins.length % 6 !== 0) {
    bins += '0'.repeat(6 - (bins.length % 6));
  }
  let idx: number = 0;
  let ret: string = '';

  while (idx < bins.length) {
    ret += base64Chars[parseInt(bins.slice(idx, idx + 6), 2)];
    idx += 6;
  }

  if (ret.length % 4 !== 0) {
    ret += '='.repeat(4 - (ret.length % 4));
  }
  return ret;
}
