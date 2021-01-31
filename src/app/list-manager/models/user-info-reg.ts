import { RoleForUser } from './role-for-user.request';

export class UserInfoRegistration {
    constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public role: RoleForUser,
    public secureHandle) {}
}   