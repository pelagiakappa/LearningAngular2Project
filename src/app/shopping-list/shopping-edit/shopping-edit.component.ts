import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.module';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // ->080 Allowing the User to Add Ingredients to the Shopping List<-
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // -->107 Adding the Shopping List Service<--
  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
  }

  // ->080 Allowing the User to Add Ingredients to the Shopping List<-
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    // this.ingredientAdded.emit(newIngredient);

    // -->107 Adding the Shopping List Service<--
    this.slService.addIngredient(newIngredient);
  }

}
