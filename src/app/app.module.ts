import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WrongrouteComponent } from './wrongroute/wrongroute.component';
import { ItemComponent } from './home/item/item.component';
import { ItemService } from './services/item.service';


const appRoute :Routes=[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'home/item/:id', component:ItemComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'courses', component:CoursesComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:WrongrouteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    NavbarComponent,
    WrongrouteComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
