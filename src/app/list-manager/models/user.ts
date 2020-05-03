import { RoleForUser } from './role-for-user.request';

export class User {
    constructor(
    public Username: string,
    public HasRegistered:boolean, 
    public FirstName: string,
    public LastName:string, 
    public Role:RoleForUser
    )
     {}
}   