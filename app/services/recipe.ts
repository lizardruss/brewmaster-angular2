import {Injectable} from 'angular2/core';
import {RECIPES} from 'app/services/mock-recipes';

@Injectable()
export class RecipeService {
    getRecipes() {
        return Promise.resolve(RECIPES);
    }
}