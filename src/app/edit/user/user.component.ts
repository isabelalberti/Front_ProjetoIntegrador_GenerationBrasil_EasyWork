import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  fullName = environment.fullName
  city = environment.city
  email = environment.email
  phone = environment.phone
  
  constructor() { }

  ngOnInit(): void {
  }

}
