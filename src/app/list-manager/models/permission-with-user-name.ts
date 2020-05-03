import { Permission } from './permission';

export class PermissionUser{
    constructor(
        public permissions:Permission[],
        public userName:string
    )
    {
        
    }
}