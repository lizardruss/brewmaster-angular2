import {Recipe} from 'app/models/recipe';
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'recipe-detail',
    template: `
        <div *ngIf="recipe">
            <h2>{{recipe.name}} details!</h2>
            <div><label>id: </label>{{recipe.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="recipe.name" placeholder="name"/>
            </div>
        </div>
    `
})
export class RecipeDetailComponent {
    @Input()
    public recipe: Recipe;
}