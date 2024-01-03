export class VerificationCode {
    public id?: string;
    public code: string;
    public expiration: Date;

    constructor(
        code: string,
        expiration: Date,
        id?: string
    ) {
        this.code = code;
        this.expiration = expiration;
        this.id = id;
    }
}
