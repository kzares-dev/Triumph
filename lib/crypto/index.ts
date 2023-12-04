import * as crypto from 'crypto';

function authToken(): string {
  return crypto.randomBytes(16).toString('hex');
}

function generateUUID(): string {
    const bytes = crypto.randomBytes(16);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const uuid = bytes.toString('hex').match(/.{1,2}/g)?.join('-') || '';
    return uuid;
  }

export {
    authToken,
    generateUUID,
}