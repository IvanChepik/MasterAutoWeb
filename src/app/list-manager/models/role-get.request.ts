import { Role } from './role';

export class RoleGetRequest{
    constructor(
        public roles:Role[]
    )
    {}
}