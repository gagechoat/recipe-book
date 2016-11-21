import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

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

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-8df8d.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-8df8d.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}
