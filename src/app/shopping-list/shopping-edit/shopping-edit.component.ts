import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrendient } from 'src/app/shared/ingrdient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef| undefined;
  @ViewChild('amountInput') amontInputRef: ElementRef| undefined;
  @Output() ingredientAdded = new EventEmitter<Ingrendient>();

  constructor() { }

  ngOnInit(): void {
  }

  creationIngredient(){
    console.log();
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount= this.amontInputRef?.nativeElement.value;
    const newIngredient = new Ingrendient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
