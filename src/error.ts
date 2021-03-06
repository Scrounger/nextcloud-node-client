// tslint:disable-next-line:no-var-requires
const debug = require("debug").debug("ClientError");

export default class ClientError extends Error {
    public code: string;
    private context?: any;

    constructor(m: string, code: string, context?: any) {
        super(m);
        this.code = code;
        this.context = context;
    }
}
