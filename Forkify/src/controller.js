"use strict";
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import * as model from './model.js';
import recipeView from './view/view.js';
//most old browser will support our code // 
const renderSpinner = function (parent) {
  const spinner = `
  <div class="loading">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
</div>`;
  parent.insertAdjacentHTML("afterbegin", spinner);
};
const showRecipe = async function () {
  try {
    const id=window.location.hash.slice(1)
    renderSpinner(recipeContainer)
    await model.loadRecipe(id)
    const {recipe}=model.state;
    recipeView.render(model.state.recipe);
    

        renderSpinner(recipeContainer)
        recipeContainer.innerHTML=''
        const mainRecipe = document.querySelector(".main");
    mainRecipe.insertAdjacentHTML("beforeend", recipeContainer);
  } catch (err) {
    console.log(err);
  }
};

showRecipe();
['hashchange','load'].forEach(ev=>window.addEventListener(ev,showRecipe))
