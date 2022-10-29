import { BaseError } from "./BaseError";

export class Conflict extends BaseError {
  constructor(msg = 'Conflict') {
    super(msg);
    this.statusCode = 409; 
  }
}