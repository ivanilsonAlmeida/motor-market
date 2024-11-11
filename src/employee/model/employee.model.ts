import { User } from '../../user/model/user.model';

export class Employee extends User {
  private _registration: number;
  private _userRole: string;

  constructor(
    name: string,
    email: string,
    password: string,
    registration: number,
    userRole: string,
  ) {
    super(name, email, password);
    this._registration = registration;
    this._userRole = userRole;
  }

  get registration(): number {
    return this._registration;
  }

  set registration(registration: number) {
    this._registration = registration;
  }

  get userRole(): string {
    return this._userRole;
  }

  set userRole(userRole: string) {
    this._userRole = userRole;
  }
}
