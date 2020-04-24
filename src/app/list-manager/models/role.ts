import { Permission } from './permission';

export class Role{
    constructor(
        public roleId:number,
        public permissions:Permission[],
        public roleName:string
    )
    {}
}