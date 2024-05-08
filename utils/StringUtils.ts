import { createHash } from 'crypto';

function isBlank(str: string | null | undefined) {
  return !str || str === '';
}
function anyBlank(...strings: Array<string>) {
  for (const str of strings) {
    if (isBlank(str)) return true;
  }
  return false;
}
function hasText(str: string | null | undefined) {
  return !isBlank(str);
}

function encryptStr(str: string): string {
  return createHash('sha512').update(str).digest('base64');
}

export { hasText, isBlank, encryptStr, anyBlank };
