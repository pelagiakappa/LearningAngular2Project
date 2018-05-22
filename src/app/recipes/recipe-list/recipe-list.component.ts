import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Recipe} from '../recipe.module';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // -->046 Creating a Recipe Model<--
  // recipes = [];
  // -->047 Adding Content to the Recipes Components<--
  // recipes => is an array which holds a couple of Recipe objects
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  // ];
  // -->048 Outputting a List of Recipes with ngFor<--
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  //   new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  // ];
  // -->079 Passing Data with Event and Property Binding Combined<--
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // -->105 Managing Recipes in a Recipe Service<--
  recipes: Recipe[];

  // -->105 Managing Recipes in a Recipe Service<--
  // -->154 Programmatic Navigation to the Edit Page<--
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // -->105 Managing Recipes in a Recipe Service<--
    this.recipes = this.recipeService.getRecipes();
  }

  // -->079 Passing Data with Event and Property Binding Combined<--
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  // -->154 Programmatic Navigation to the Edit Page<--
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
