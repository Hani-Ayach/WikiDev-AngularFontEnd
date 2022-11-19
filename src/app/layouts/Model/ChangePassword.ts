export class ChangePassword {
  constructor(
    public userId: string|any,
    public oldPassword: string|any,
    public newPassword: string|any,
    public confirmPassword: string|any
  ) {}
}
