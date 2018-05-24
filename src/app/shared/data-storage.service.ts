// -->243 Sending PUT Requests to Save Data<--
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.module';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  // -->254 Sending the Token<--
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    // return this.http.put('https://ng-recipe-book-480bb.firebaseio.com/recipes.json', this.recipeService.getRecipes());

    // -->254 Sending the Token<--
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book-480bb.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  // -->244 GETting Back the Recipes<--
  getRecipes() {
    // this.http.get('https://ng-recipe-book-480bb.firebaseio.com/recipes.json')
    //   .subscribe(
    //     (response: Response) => {
    //       const recipes: Recipe[] = response.json();
    //       this.recipeService.setRecipes(recipes);
    //       console.log(recipes);
    //     }
    //   );

    // -->245 Transforming Response Data to Prevent Errors<--
    // this.http.get('https://ng-recipe-book-480bb.firebaseio.com/recipes.json')
    //   .map(
    //     (response: Response) => {
    //       const recipes: Recipe[] = response.json();
    //       for (const recipe of recipes) {
    //         // if we don't have the ingredients property
    //         if (!recipe['ingredients']) {
    //           console.log(recipe);
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       return recipes;
    //     }
    //   )
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipeService.setRecipes(recipes);
    //     }
    //   );

    // -->254 Sending the Token<--
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-480bb.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            // if we don't have the ingredients property
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );

  }

}
