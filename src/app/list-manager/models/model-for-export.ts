import { Field } from './field';

export class ModelForExport{
    constructor(
        public fullName:string,
        public fields: Field[],
    )
    {
        
    }
}