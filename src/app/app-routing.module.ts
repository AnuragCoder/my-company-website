import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';




const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  {path: 'join', component: JoinusComponent },
  { path: 'contact', component: ContactComponent },
  {path: '' , component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
