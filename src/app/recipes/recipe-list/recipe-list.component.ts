import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cake', 'Tangy and delicious', 'http://omgchocolatedesserts.com/wp-content/uploads/2016/05/Strawberry-Chocolate-Cake-1.jpg', []),
    new Recipe('Pasty', 'Amazingly Good', 'http://s3.amazonaws.com/gmi-digital-library/6058169a-dc6f-4a26-bb69-98b552434259.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
