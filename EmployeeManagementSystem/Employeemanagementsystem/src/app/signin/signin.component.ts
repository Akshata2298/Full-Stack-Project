import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private s6:EmpserviceService) { }

  ngOnInit(): void {
  }

  logindata(loginform: { value: any; })
  {
     this.s6.loginform1(loginform.value).subscribe();
  }
}
