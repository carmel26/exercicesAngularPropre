import { Component, OnInit } from '@angular/core';
import { Ingrendient } from '../shared/ingrdient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
   ingredients:Ingrendient[] = [
     new Ingrendient('Apple',5),
     new Ingrendient('Mangoes',52),
     new Ingrendient('Tomatos',10),
   ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingrendient: Ingrendient){ 
    this.ingredients.push(ingrendient);
  }

}
