import { BaseError } from "./BaseError";

export class Unauthorized extends BaseError {
  constructor(msg = 'Unauthorized') {
    super(msg);
    this.statusCode = 401; 
  }
}