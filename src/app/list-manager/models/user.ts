import { RoleForUser } from './role-for-user.request';
import { Field } from './field';

export class User {
    constructor(
    public Username: string,
    public HasRegistered:boolean, 
    public FirstName: string,
    public LastName:string, 
    public Role:RoleForUser,
    public PhoneNumber:string,
    public Fields: Field[],
    )
     {}
}   