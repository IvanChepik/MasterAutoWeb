export class RoleFieldPushRequest{
    constructor(
        public fieldName:string,
        public listOfRolesToVisible:number[]
    )
    {}
}