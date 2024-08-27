import { User } from "./user.model";

export class Employee extends User{
  private registration: number;
  private userRole: string;

  constructor(name: string, email: string, password: string, registration: number, userRole: string) {
    super(name, email, password)
    this.registration = registration;
    this.userRole = userRole;
  }

  get getRegistration(): number {
    return this.registration;
  }

  set setRegistration(registration: number) {
    this.registration = registration;
  }

  get getuserRole(): string {
    return this.userRole;
  }

  set setuserRole(userRole: string) {
    this.userRole = userRole;
  }
}
