import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  // -->153 Retrieving Route Parameters<--
  id: number;
  editMode = false;

  // -->153 Retrieving Route Parameters<--
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // -->153 Retrieving Route Parameters<--
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // We want to see if params has an `id` property. So, if it
          // has one then this `params['id']` will be a string with
          // the id, otherwise it will be undefined. If `id` is defined
          // `params['id']` will only be not undefined, if we are on
          // edit mode, so this check returns true. If `id` is undefined
          // therefore equal to null, this check returns false, so
          // then we are in new mode.
          this.editMode = params['id'] != null;
          console.log(this.editMode);
        }
      );
  }

}
