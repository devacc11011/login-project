class AuthenticationError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
class BadCredentialError extends AuthenticationError {
  constructor(msg: string) {
    super(msg);
  }
}
class UserNotFoundError extends AuthenticationError {
  constructor(msg: string) {
    super(msg);
  }
}

export { AuthenticationError, BadCredentialError, UserNotFoundError };
