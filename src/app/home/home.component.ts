import { Component ,OnInit} from '@angular/core';
import { ItemService } from '../services/item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private itemSevice:ItemService){}
 items:any=[];
 ngOnInit(): void {
  this.items=this.itemSevice.items;
 }
}
