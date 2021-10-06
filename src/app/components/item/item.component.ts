/*Aca se importan, y se definen las funciones */

import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item=new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //onDelete es la función que elimina los elementos
  onDelete(item: Item){
    this.deleteItem.emit(item);  }

  //item.completed es lo inverso  a item.completed y se cambia para modificar el checkbox
  onToggle(item: Item){
    item.completed =!item.completed;
    this.toggleItem.emit(item);
  }
}
