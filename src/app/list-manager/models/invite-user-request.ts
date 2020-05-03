export class InviteUserRequest {
    constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public roleId: number,) {}
}   