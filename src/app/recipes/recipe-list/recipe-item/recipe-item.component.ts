import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Recipe} from '../../recipe.module';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // -->078 Passing Recipe Data with Property Binding<--
  @Input() recipe: Recipe;
  // -->079 Passing Data with Event and Property Binding Combined<--
  // @Output() recipeSelected = new EventEmitter<void>();

  // -->106 Using a Service for Cross-Component Communication<--
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  // -->079 Passing Data with Event and Property Binding Combined<--
  onSelected() {
    // this.recipeSelected.emit();

    // -->106 Using a Service for Cross-Component Communication<--
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
