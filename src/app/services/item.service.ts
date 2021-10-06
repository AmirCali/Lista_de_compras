import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[]= [
    {
      id: 0,
      title:'Limón',
      price: 4.5,
      quantity: 2,
      completed: true
      },

      {
      id: 1,
      title:'pan',
      price: 0.2,
      quantity: 8,
      completed: true
      },

      {
        id: 2,
        title:'chamarra',
        price: 300,
        quantity: 1,
        completed: true
        }
  ];
  constructor() { }

getItems(){
  return this.items;
}
  addItem(item:Item){
    this.items.unshift(item);   //se agrega el item al inicio
  }

}
