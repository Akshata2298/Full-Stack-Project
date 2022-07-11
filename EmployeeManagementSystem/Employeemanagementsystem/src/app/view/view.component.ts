import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpserviceService } from '../empservice.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private s1:EmpserviceService) {this.viewemployee();  }
  employees!:any;
  ngOnInit(): void {
  }

  viewemployee()
  {

   this.s1.viewemployee1().subscribe(
     (resp) => { this.employees=resp; }
     );
}
}