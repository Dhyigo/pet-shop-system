export class ApiException {
  public readonly message: string;

  constructor(message: string) {
    this.message = message;
  }
}
