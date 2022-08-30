import { createHmac } from 'crypto';

export const hashPassword = (password: string) => {
  const { CRYPTO_ALGORITHM, SECRET } = process.env;
  const hmac = createHmac(CRYPTO_ALGORITHM, SECRET).update(password); 
  return hmac.digest('hex');
}