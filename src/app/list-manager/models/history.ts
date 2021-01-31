import { Sms } from './sms';

export class ReceivedHistory {
    constructor(
    public studentId: string,
    public phone: string,
    public messages:Sms[],
    public messageCount:string) {}
}   