import * as config from './config.js';
import * as helper from './view/helper.js';
export const state={
    recipe:{}
}
export const loadRecipe=async function(id){
    try{
        const data=await helper.getJson(config.API_URL)
        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            sourceImage: recipe.source_url,
            servings: recipe.servings,
            ingredients: recipe.ingredients,
            image: recipe.image_url,
            publisher: recipe.publisher,
            cookingTime: recipe.cooking_time,
        };
        state.recipe=recipe;
    }
    catch(err){
        console.error(`${err} ✨`);
    }
}