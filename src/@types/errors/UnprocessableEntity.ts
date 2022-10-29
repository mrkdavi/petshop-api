import { BaseError } from "./BaseError";

export class UnprocessableEntity extends BaseError {
  constructor(msg = 'Unprocessable Entity') {
    super(msg);
    this.statusCode = 422; 
  }
}
