
export interface IUser {
  name: string;
  surname: string;
  email: string;
  birthDate: Date;
  phoneNumber: string;
}

export interface IRegisterUser {
  name: string;
  surname: string;
  email: string;
  birthDate: Date;
  phoneNumber: string;
  password: string;
  consent: boolean;
}
