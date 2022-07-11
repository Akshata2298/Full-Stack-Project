import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const appRoute: Routes = [
  { path: 'view' , component: ViewComponent  },
  { path: 'update' , component: UpdateComponent },
  { path: 'insert' , component: InsertComponent },
   { path: 'delete', component:  DeleteComponent },
  { path: 'services', component: ServicesComponent },
   {path: 'signin',component: SigninComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'about', component: AboutComponent},
   { path: 'home', component: HomeComponent},
   {path: 'contact',component: ContactComponent},
   {path: 'about', component: AboutComponent},
   
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [SigninComponent,SigninComponent,InsertComponent,DeleteComponent,ViewComponent,UpdateComponent,ContactComponent]