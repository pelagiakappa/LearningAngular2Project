import {Component, OnInit} from '@angular/core';

import {Recipe} from './recipe.module';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // -->105 Managing Recipes in a Recipe Service<--
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // -->079 Passing Data with Event and Property Binding Combined<--
  selectedRecipe: Recipe;

  // -->106 Using a Service for Cross-Component Communication<--
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    // -->106 Using a Service for Cross-Component Communication<--
    // ES6 arrow function (argument list) => {function body}
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
