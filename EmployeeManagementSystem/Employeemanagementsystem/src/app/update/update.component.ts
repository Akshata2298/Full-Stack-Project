import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor( private s3:EmpserviceService) { }

  ngOnInit(): void {
  }

  updatedata(updateform: { value: any; })
  {
    this.s3.updatedetails(updateform.value).subscribe();
  }

}
