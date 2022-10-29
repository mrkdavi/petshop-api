import { BaseError } from "./BaseError";

export class BadRequest extends BaseError {
  constructor(msg = 'Bad Request') {
    super(msg);
    this.statusCode = 400; 
  }
}