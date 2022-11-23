import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from '@env/environment';
import { IUserProfile } from '@app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  public signup(data: any): Observable<IUserProfile> {
    return this.http.post<IUserProfile>(`${API_URL}/auth/signup`, data);
  }

}
