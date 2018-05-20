// -->046 Creating a Recipe Model<--
// A model in the end should just be a blueprint for objects we create, and a typescript class does just this job.
// A class can be instantiated (with the `new` keyword) so we can create new objects based on the setup we provide here in this class.
// We define how a single recipe looks like here.
import {Ingredient} from '../shared/ingredient.module';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  // -->109 Adding Ingredients to Recipes<--
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    // -->109 Adding Ingredients to Recipes<--
    this.ingredients = ingredients;
  }
}
