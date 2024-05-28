/**
 * 주어진 문자열이 오직 영어 알파벳(대문자 및 소문자), 한글(자모 및 음절), 숫자로만 구성되어 있는지 확인하는 함수입니다.
 *
 * @param value - 검사할 문자열입니다.
 * @returns 문자열이 오직 영어 알파벳, 한글, 숫자로만 구성되어 있으면 true를 반환하고,
 *          그렇지 않으면 false를 반환합니다.
 */
export const hasOnlyNumberAndEnglishAndHangul = (value: string) =>
  /^[ㄱ-힣a-zA-Z0-9]*$/.test(value);
