import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../shared/ingredient.module';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // -->050 Working on the ShoppingListComponent<--
  // ingredients = [];
  // -->052 Creating and Outputting the Shopping List<--
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  // -->107 Adding the Shopping List Service<--
  ingredients: Ingredient[];

  // -->107 Adding the Shopping List Service<--
  constructor(private slService: ShoppingListService) {
  }

  // -->107 Adding the Shopping List Service<--
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    // -->108 Using Services for Push Notifications<--
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  // ->080 Allowing the User to Add Ingredients to the Shopping List<-
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
