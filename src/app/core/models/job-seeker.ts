import { Application } from "./application";
import { User } from "./user";

export class JobSeeker extends User {

    public identity: string;
    public resume: string;
    public applications: Application[];

    constructor(
        fullName: string,
        email: string,
        phoneNumber: string,
        identity: string,
        resume: string,
        applications: Application[],
        id?: string
    ) {
        super(fullName, email, phoneNumber, id);
        this.identity = identity;
        this.resume = resume;
        this.applications = applications;
    }
}
