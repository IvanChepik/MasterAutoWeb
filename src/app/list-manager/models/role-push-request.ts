export class RolePushRequest{
    constructor(
        public roleName:string,
        public permissions:string[]
    )
    {}
}