import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  id:string='';
  title:string = '';
  price:number = 0;
  quantity:number = 0;
  constructor(private itemservice:ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.title=this.title;
    item.price=this.price;
    item.quantity=this.quantity;
    item.completed= true;

    this.itemservice.addItem(item);
    this.router.navigate(['/']);
  }


}