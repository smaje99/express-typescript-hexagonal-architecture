export class UserNotFound extends Error {
  constructor(userId: string) {
    super(`User ID not found "${userId}"`);
  }
}
