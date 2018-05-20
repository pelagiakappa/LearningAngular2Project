import {Component, Input, OnInit} from '@angular/core';

import {Recipe} from '../recipe.module';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // -->079 Passing Data with Event and Property Binding Combined<--
  @Input() recipe: Recipe;

  // -->110 Passing Ingredients from Recipes to the Shopping List via a Service<--
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  // -->110 Passing Ingredients from Recipes to the Shopping List via a Service<--
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
