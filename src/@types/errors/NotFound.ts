import { BaseError } from "./BaseError";

export class NotFound extends BaseError {
  constructor(msg = 'Not Found') {
    super(msg);
    this.statusCode = 404; 
  }
}