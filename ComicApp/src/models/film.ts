export class Film {
    code: string
    title: string
    did: number
    kind: string

    constructor(code, title, did, kind)
    {
        this.code = code;
        this.title = title;
        this.did = did;
        this.kind = kind;
    }
}
