export class BaseError extends Error {
  statusCode: number;

  constructor(msg = '') {
    super(msg);
  }
}