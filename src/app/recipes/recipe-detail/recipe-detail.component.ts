import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Recipe} from '../recipe.module';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // -->079 Passing Data with Event and Property Binding Combined<--
  // @Input() recipe: Recipe;
  // -->149 Configuring Route Parameters<--
  recipe: Recipe;
  id: number;

  // -->110 Passing Ingredients from Recipes to the Shopping List via a Service<--
  // -->149 Configuring Route Parameters<--
  // -->154 Programmatic Navigation to the Edit Page<--
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // -->149 Configuring Route Parameters<--
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  // -->110 Passing Ingredients from Recipes to the Shopping List via a Service<--
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  // -->154 Programmatic Navigation to the Edit Page<--
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // Alternatively
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
