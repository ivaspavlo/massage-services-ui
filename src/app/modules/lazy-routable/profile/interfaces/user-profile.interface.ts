export interface IUserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  password?: string;
  confirmPassword?: string;
}
