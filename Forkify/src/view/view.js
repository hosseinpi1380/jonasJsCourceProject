class RecipeView {
  #data;
  #parentElement = document.querySelector(".main");
  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  }
  #clear() {
    this.#parentElement.innerHTML = '';
  }
  // renderSpinner(recipeContainer);

  #generateMarkup() {
    return `
    <div class="recipe__main w-2/3">
          <div class="sourceImage h-[30%] flex flex-col items-center">
            <div class="image-source w-full h-full">
            <img src="${this.#data.image}" alt="${this.#data.image}
      "class="w-full h-full object-cover">
            </div>
            <h1
              class="title-image bg-gradient-to-r -mt-[70px] from-left to-right inline-block px-2 py-1 font-medium text-3xl text-white -skew-y-6 "
            >
              ${this.#data.title}
            </h1>
          </div>
          <div class="recipe__info mt-4 flex flex-row justify-around">
            <div class="cocking__time flex flex-row text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f38e82"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1><span class="font-semibold">${this.#data.cookingTime
      }</span> minutes</h1>
            </div>
            <div class="cooking__serveings flex flex-row text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f38e82"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              <h1><span class="font-semibold">${this.#data.servings
      }</span> servings</h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#f38e82"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#f38e82"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <div class="user flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f38e82"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-8 h-8 bg-gradient-to-r from-left to-right p-1 rounded-xl"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </div>
          </div>
          <div class="recipe__ingredients flex items-center text-xl flex-col mt-8">
            <h1 class="recipe__ingredients--title uppercase text-svg-color">
              recipe ingredients
            </h1>
            <div class="recipe__ingredients-menu flex flex-row mt-6 justify-around w-[500px]">
              <ul class="menu__ingredients">
                ${this.#data.ingredients
        .map((ing) => {
          return `<li class="recipe__ingredient-list inline-block w-1/2 h-min">
                  <div class='flex'>
                  <div class='recipe__quantity'>${ing.quantity}</div>
                  <div class="recipe__description">
                  ${ing.description}this.#data
                    <span class="recipe__unit">${ing.unit}</span></div>
                  </div>
                  </li>`;
        })
        .join("")}
              </ul>
            </div>
          </div>
          <div class="guide-to-cook flex justify-center flex-col items-center mt-9 px-6">
            <h1 class="guide-title uppercase text-svg-color mb-4">How to cook it </h1>
            <p class="guide-para">This recipe was carefully designed and tested by <span class="publisher">${this.#data.publisher}</span>.
            Please check out directions at their website.</p>
            <button class="guide-directions bg-gradient-to-r from-left to-right p-3 rounded-xl text-white">Directions</button>
          </div>
        </div>`;
  }
}

export default new RecipeView();