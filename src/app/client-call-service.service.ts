import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientCallService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Pragma': 'No-Cache',
      'Cache-Control': 'No-Cache',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  public getRequest(url: any): Observable<any> {
    return this.http.get(url, this.httpOptions);
  }

  public postRequest(url: any): Observable<HttpEvent<any>> {
    return this.http.post<any>(url, this.httpOptions);
  }

  public putRequest(url: any): Observable<HttpEvent<any>> {
    return this.http.put<any>(url, this.httpOptions);
  }
}
