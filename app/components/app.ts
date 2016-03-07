import {Recipe} from 'app/models/recipe';
import {Component, OnInit} from 'angular2/core';
import {RecipeDetailComponent} from 'app/components/recipe-detail';
import {RecipeService} from 'app/services/recipe';

@Component({
    selector: 'brewmaster',
    directives: [RecipeDetailComponent],
    providers: [RecipeService],
    template: `
        <h1>Welcome to Brewmaster</h1>
        <h2>My Recipes</h2>
        <ul class="recipes">
            <li *ngFor="#recipe of recipes"
                (click)="onSelect(recipe)"
                [class.selected]="recipe === selectedRecipe">
                <span class="badge">{{recipe.id}}</span> {{recipe.name}}
            </li>
        </ul>
        <recipe-detail [recipe]="selectedRecipe"></recipe-detail>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .recipes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
        }
        .recipes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
        }
        .recipes li.selected:hover {
            color: white;
        }
        .recipes li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
        }
        .recipes .text {
            position: relative;
            top: -3px;
        }
        .recipes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
        }
    `]
})

export class AppComponent implements OnInit {
    public title = "Brewmaster";
    public recipes: Recipe[];
    public selectedRecipe: Recipe;

    constructor(private _recipeService: RecipeService){
    }

    ngOnInit() {
        this.getRecipes();
    }

    getRecipes() {
        this._recipeService.getRecipes().then(recipes=>{
            this.recipes = recipes;
        });
    }

    onSelect(recipe: Recipe) {
        this.selectedRecipe = recipe;
    }
}