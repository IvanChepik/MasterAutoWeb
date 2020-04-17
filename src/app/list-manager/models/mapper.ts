export class Mapper {
    constructor(public sourceField: string,
				public destinationField: string) {}
				
	static Empty = new Mapper("","");
}
