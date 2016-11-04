import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Cake', 'Tangy and delicious', 'http://omgchocolatedesserts.com/wp-content/uploads/2016/05/Strawberry-Chocolate-Cake-1.jpg', []),
    new Recipe('Pasty', 'Amazingly Good', 'http://s3.amazonaws.com/gmi-digital-library/6058169a-dc6f-4a26-bb69-98b552434259.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
