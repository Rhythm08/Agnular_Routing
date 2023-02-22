import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  item:any;
  itemId:any;
  constructor(private activatedRoute:ActivatedRoute, private service:ItemService){}
  ngOnInit(): void {
   this.itemId=this.activatedRoute.snapshot.params['id'];
   //  console.log(this.itemId)
   this.item= this.service.items.find(x=>x.id == this.itemId);
  }

}
