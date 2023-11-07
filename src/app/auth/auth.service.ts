import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'https://animecloths.com/app/index.php/';

  constructor(public http: HttpClient) { }

  login(path: string,username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + path, { username, password });
  }

  emailsave(path:string, email: string):Observable<any>
  {
    return this.http.post<any>(this.apiUrl + path, {email});
  }
}
 