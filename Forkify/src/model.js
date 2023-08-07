export const state={
    recipe:{}
}
export const loadRecipe=async function(id){
    try{
        const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await res.json();
        let { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            sourceImage: recipe.source_url,
            servings: recipe.servings,
            ingredients: recipe.ingredients,
            image: recipe.image_url,
            publisher: recipe.publisher,
            cookingTime: recipe.cooking_time,
        };
        console.log(state.recipe);
    }
    catch(err){
        console.log(err);
    }
}