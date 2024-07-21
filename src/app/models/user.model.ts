export interface User {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly roles: string;
  readonly phone: number[];
  readonly birth_date: Date;
  readonly default_address: string;
}
