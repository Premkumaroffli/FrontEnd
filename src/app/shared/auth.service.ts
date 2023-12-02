import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public apiUrl = 'http://localhost/backend/app/index.php/';

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

  getAllData(path:string): Observable<any> {
  return this.http.get<any>(this.apiUrl + path);
  }

  isloggedin()
  {
    return !!localStorage.getItem('LoginToken');
  }

  logout(): void {
    // Clear authentication tokens or session data
    localStorage.removeItem('LoginToken');
    sessionStorage.clear();
    window.location.reload();
  }
  
}
 