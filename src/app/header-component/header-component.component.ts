import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-sevice';
import { Login } from '../model/Login';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  login: Login = new Login();
  dataService: DataService = new DataService();

  constructor() { }

  ngOnInit() {
    this.login = this.dataService.login; 
 }


}
