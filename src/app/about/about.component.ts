import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private route:Router,private activatedRoute:ActivatedRoute){}
   navigatetoHome(){
    // this.route.navigate(['home'],{relativeTo:this.activatedRoute});
    this.route.navigate(['home']);

    // this.route.navigateByUrl('home');
   }
}
 