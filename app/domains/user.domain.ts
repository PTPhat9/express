export interface UserProp {
    id: number;
    email: string;
    username: string;
    firstname: string;
    contact_id: string;
}

export class UserDomain {

    constructor(public props: UserProp) {}

    initProp(): void {
        const obj:any = {}
        obj['id'] = 0,
        obj['username'] = '',
        obj['email'] = '',
        this.props = obj;
    }
}