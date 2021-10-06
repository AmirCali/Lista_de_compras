import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;


  constructor(private itemservice:ItemService) {  } //Con esto inyectamos la variable itemService para usarla en ngOnInit

  ngOnInit(): void {
    //this.items = []
    this.items = this.itemservice.getItems(); //ingresamos los datos de cada row

    this.getTotal(); //llamamos a la funcion para que se actualice el monto total

  }
    deleteItem(item: Item){
      this.items = this.items.filter(x => x.id != item.id) //con esta función se filtran y se nos muestran todos los elementos con una ID diferente a la que especifiquemos
      this.getTotal();
  }

  toggleItem(item:Item){ //esta función permite actualizar elvalro total cada que se tacha un elemento
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
                .filter(x => x.completed) //sirve para obtener el total solamente de los elementos con x.completed como false, los mapea uno por uno y luego suma las cantidades en el contadort "acc"
                .map(x=> x.quantity * x.price)
                .reduce((acc,item) => acc += item, 0);
    }

}
