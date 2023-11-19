import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost/backend/app/index.php/';

  constructor(public http: HttpClient) { }

  login(path: string,formdata : any): Observable<any> {
    return this.http.post<any>(this.apiUrl + path, {formdata});
  }

  signup(path: string,formdata : any): Observable<any> {
    return this.http.post<any>(this.apiUrl + path, {formdata});
  }

  emailsave(path:string, email: string):Observable<any>
  {
    return this.http.post<any>(this.apiUrl + path, {email});
  }

  savecomplaint(path:string, formdata: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + path, formdata);
 }


  isloggedin()
  {
    return !!localStorage.getItem('token');
  }
}
 