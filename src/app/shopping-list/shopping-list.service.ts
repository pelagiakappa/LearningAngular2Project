// -->104 Setting up the Services<--
import {EventEmitter} from '@angular/core';

import {Ingredient} from '../shared/ingredient.module';

export class ShoppingListService {
  // -->108 Using Services for Push Notifications<--
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  // -->107 Adding the Shopping List Service<--
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    // -->108 Using Services for Push Notifications<--
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  // -->110 Passing Ingredients from Recipes to the Shopping List via a Service<--
  addIngredients(ingredients: Ingredient[]) {
    // The downside is that we emit a lot of events.
    // for (const ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // With ES6 feature => the spread operator `...` (allows as to
    // basically turn an array of elements into a list of elements).
    // We spread our ingredients into a list of single ingredients.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
