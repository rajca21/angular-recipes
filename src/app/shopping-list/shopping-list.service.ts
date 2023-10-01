import { Subject } from 'rxjs';

// models
import { Ingredient } from '../shared/ingedient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }   // too much events emitted

    this.ingredients.push(...ingredients);
    // this.orderIngredients();
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // orderIngredients() {    // to be made
  //   for (let i = 0; i < this.ingredients.length; i++) {
  //     for (let j = 0; j < this.ingredients.length; j++) {
  //       if (this.ingredients[i].name === this.ingredients[j].name && i !== j) {
  //         this.ingredients[i].amount += this.ingredients[j].amount;
  //         this.ingredients.splice(j, 1);
  //       }
  //     }
  //   }
  // }
}
