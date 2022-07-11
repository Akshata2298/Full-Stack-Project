import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private s2 : EmpserviceService ) { }

  ngOnInit(): void {
  }

  insertdata(insertform: { value: any; })
  {
     this.s2.insertform1(insertform.value).subscribe();
  }

}
