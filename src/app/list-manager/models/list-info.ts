import { Mapper } from './mapper';

export class ListInfo {
	constructor(
		public mapper: Mapper[],
		public jsonString: string,
		public listName: string,
		public listOfNewColumns: string[],
		public listId:number) {
			
		}
		dateTime:Date;
}
