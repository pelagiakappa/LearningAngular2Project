import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Ingredient} from '../shared/ingredient.module';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // -->050 Working on the ShoppingListComponent<--
  // ingredients = [];
  // -->052 Creating and Outputting the Shopping List<--
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  // -->107 Adding the Shopping List Service<--
  ingredients: Ingredient[];

  // ->166 Improving the Reactive Service with Observables Subjects<-
  private subscription: Subscription;

  // -->107 Adding the Shopping List Service<--
  constructor(private slService: ShoppingListService) {
  }

  // -->107 Adding the Shopping List Service<--
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    // -->108 Using Services for Push Notifications<--
    // ->166 Improving the Reactive Service with Observables Subjects<-
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  // ->080 Allowing the User to Add Ingredients to the Shopping List<-
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  // ->166 Improving the Reactive Service with Observables Subjects<-
  // We're using our own `Subject` here, so we have to unsubscribe
  // whenever we don't need it anymore.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
