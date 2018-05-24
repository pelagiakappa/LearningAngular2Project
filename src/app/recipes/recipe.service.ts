// -->104 Setting up the Services<--
import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.module';
import {Ingredient} from '../shared/ingredient.module';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

// -->110 Passing Ingredients from Recipes to the Shopping List via a Service<--
@Injectable()
export class RecipeService {
  // -->105 Managing Recipes in a Recipe Service<--
  // private recipes: Recipe[] = [
  //   new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  //   new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  // ];

  // -->109 Adding Ingredients to Recipes<--
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  // -->106 Using a Service for Cross-Component Communication<--
  recipeSelected = new EventEmitter<Recipe>();

  // -->110 Passing Ingredients from Recipes to the Shopping List via a Service<--
  constructor(private slService: ShoppingListService) {
  }

  // -->244 GETting Back the Recipes<--
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    // this.recipesChanged.next(this.recipes.slice());
  }

  // -->105 Managing Recipes in a Recipe Service<--
  getRecipes() {
    // slice => will return a new array which is an exact copy of
    // the one in this service file.
    return this.recipes.slice();
  }

  // -->110 Passing Ingredients from Recipes to the Shopping List via a Service<--
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  // -->149 Configuring Route Parameters<--
  getRecipe(index: number) {
    return this.recipes[index];
  }

}
