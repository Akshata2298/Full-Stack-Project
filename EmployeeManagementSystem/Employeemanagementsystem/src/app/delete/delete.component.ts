import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private s4:EmpserviceService) { }

  ngOnInit(): void {
  }

  deletedata(deleteform: any)
{
  this.s4.deleteemployee(deleteform.value).subscribe();
}
}
