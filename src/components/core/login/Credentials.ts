export class Credentials {
    constructor(username: string, password: string) {
        this._username=username;
        this._password=password;
    }

    private _username: string | undefined;

    get username(): string {
        return this._username as string;
    }

    set username(value: string) {
        this._username = value;
    }

    private _password: string | undefined;

    get password(): string {
        return this._password as string;
    }

    set password(value: string) {
        this._password = value;
    }
}
