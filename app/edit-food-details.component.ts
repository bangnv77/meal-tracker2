import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class="form-group">
    <input [(ngModel)]="food.name">
  </div>
  <div class="form-group">
    <input [(ngModel)]="food.calories" type="number">
  </div>
  <div class="form-group">
    <input [(ngModel)]="food.details">
  </div>
  <div class="form-group">
    <input [(ngModel)]="food.time"j class="input-lg" type="time">
  </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
