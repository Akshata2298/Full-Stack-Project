import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component'; 
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  url1 = "http://localhost:9002/view";
  url2 = "http://localhost:9002/insert";
  url3 = "http://localhost:9002/update";
  url4 = "http://localhost:9002/delete";
  url5 = "http://localhost:9002/login";
  
  public viewemployee1()
  {
    return this.http.get(this.url1);
  }
  
  public insertform1(insertform: any)
  {
    return this.http.post(this.url2,insertform);

  }

  public updatedetails(empupdate: any)
  {
     return this.http.post(this.url3,empupdate);

  }

  public deleteemployee(empdelete: any)
  {
    return this.http.post(this.url4,empdelete);
 }

 public loginform1(loginform: any)
 {
   return this.http.post(this.url5,loginform);

 }
 
 }


