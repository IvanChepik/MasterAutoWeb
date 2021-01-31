export class Permission{
    constructor(
        public id:number,
        public permissionName:string,
        public friendlyName:string
    )
    {
        
    }

    public isChecked:boolean = false;
}