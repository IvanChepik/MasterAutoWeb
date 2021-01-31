export class LeadList {
    public leadListId: number;
    public name: string;
    public uploadStatusName: number;
	public linesCount : number;
	public CountOfUpdatedLines : number;
    public dateAdded: Date;
    public userId: string;
	
    public toString = () : string => {
        return `${this.name}`;
    }
}