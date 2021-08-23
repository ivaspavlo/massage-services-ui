export interface IProfileFormValue {
  name: string;
  surname: string;
  birthDate: Date;
  email: string;
  phoneNumber: string;
  password?: string;
  confirmPassword?: string;
}
