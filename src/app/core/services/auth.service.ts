
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from '@env/environment';
import { IRegisterUser, IUser } from '@app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  public signup(data: any): Observable<IUser> {
    return this.http.post<IUser>(`${API_URL}/auth/signup`, data);
  }

  // public login(data: ILoginReq): Observable<ILoginRes> {
  //   return this.http.post<ILoginRes>(`${ API_URL }/login`, data);
  // }

  // public forgot(data: IRemindPasswordReq): Observable<IRemindPasswordRes> {
  //   return this.http.post<IRemindPasswordRes>(`${ API_URL }/forgotten/password`, data);
  // }

  // public validateResetToken(data: IValidateResetTokenReq): Observable<IValidateResetTokenRes> {
  //   return this.http.post<IValidateResetTokenRes>(`${ API_URL }/reset/password/check`, data).pipe(
  //     map(res => ({ ...res, ...data }))
  //   );
  // }

  // public resetPassword(data: IPasswordResetReq): Observable<null> {
  //   return this.http.post<null>(`${ API_URL }/reset/password`, data);
  // }

  // public validateEmailAddress(data: ICheckIfEmailAddressInUseReq): Observable<ICheckIfEmailAddressInUseRes> {
  //   return this.http.post<ICheckIfEmailAddressInUseRes>(`${ API_URL }/check/email`, data);
  // }

}
