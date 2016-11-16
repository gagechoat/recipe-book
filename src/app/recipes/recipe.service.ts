import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Cake', 'Tangy and delicious', 'http://omgchocolatedesserts.com/wp-content/uploads/2016/05/Strawberry-Chocolate-Cake-1.jpg', [
      new Ingredient('Flour', 2),
      new Ingredient('Sugar', 1)
    ]),
    new Recipe('Pasty', 'Amazingly Good', 'http://s3.amazonaws.com/gmi-digital-library/6058169a-dc6f-4a26-bb69-98b552434259.jpg', [
      new Ingredient('Dough', 4),
      new Ingredient('Filling', 3)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
