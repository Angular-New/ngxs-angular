export interface IUser {
  username: string;
  email: string;
}

export namespace UserActions {
  export class RegisteredUser {
    static readonly type: string = `[User] Registered User`;
    constructor(public payload: IUser) {}
  }
}
