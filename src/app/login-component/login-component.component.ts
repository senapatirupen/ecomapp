import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClientCallService } from './../client-call-service.service';
import { Login } from '../model/Login';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from '../data-sevice';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  existingUser: Login = new Login();
  dataService: DataService = new DataService();

  constructor(private clientCallService: ClientCallService, private http: HttpClient, activeRoute: ActivatedRoute,
    private router: Router) {
  }

  public httpOptions = {
    headers: new HttpHeaders({
      'Pragma': 'No-Cache',
      'Cache-Control': 'No-Cache',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  ngOnInit(): void {
  }


  userLogin1(existingUser: Login) {
    this.clientCallService.postRequest('http://localhost:9091/signIn' + this.existingUser);
    console.log("success")
  }

  userLogin(existingUser: Login): Login {
    console.log("start");
    this.http.post<Login>('http://localhost:9091/signIn', existingUser, this.httpOptions).subscribe(data => console.log(data),
    error => console.log('oops', error));
    this.http.post<Login>('http://localhost:9091/signIn', existingUser, this.httpOptions).subscribe(data => this.existingUser = data)
    if(this.existingUser.password != null){
      this.router.navigateByUrl("/");
    }
    return this.existingUser;
  }
  ngOnDestroy() {
    this.dataService.login = this.existingUser; 
 }

}
