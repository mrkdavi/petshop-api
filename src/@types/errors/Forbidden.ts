import { BaseError } from "./BaseError";

export class Forbidden extends BaseError {
  constructor(msg = 'Forbidden') {
    super(msg);
    this.statusCode = 403; 
  }
}