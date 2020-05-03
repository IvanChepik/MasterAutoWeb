import { RoleForUser } from './role-for-user.request';

export class UserRegistrationRequest {
    constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public roleId: number,
    public password:string,
    public secureHandle) {}
}   