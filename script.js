const firstUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

const wrapper = document.querySelector(".wrapper");
const details = document.querySelector("#details");
const box = document.querySelector(".box");

function getCocktails(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderData(data.drinks);
    })

    .catch((error) => {
      console.log(error);
    });
}
getCocktails(firstUrl);

//TODO
// - Search
// - each cocktail page/details
// - loading
// - pagination
// styling to complete

//wrapper.innerHTML = "";
function renderData(data) {
  let box;
  for (let i = 0; i < data.length; i++) {
    //wrapper.innerHTML = "";
    box = `
         <a href="" >
         <div class="box" onclick="showCocktailDetails(${data[i].idDrink})" data-id="${data[i].idDrink}">
         <img id="details" src="${data[i].strDrinkThumb}" alt="coctail image name" />
         <h3 class="title">${data[i].strDrink}</h3>
         </div>
        </a>   
        `;
    //console.log(box);
    wrapper.innerHTML += box;
  }
}

//
function showCocktailDetails(id) {
  console.log("Clicked funtion", typeof id);
  const urlById = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  // console.log(urlById);
  // getCocktails(urlById);

  fetch(urlById)
    .then((resp) => resp.json())
    .then((cocktailData) => {
      console.log(urlById);
      console.log(cocktailData.drinks);
    })
    .catch((error) => {
      console.log(error);
    });

  wrapper.innerHTML = "";
  // const infoBox = `
  //         <div class="single-drink">
  //         <div class="drink-img">
  //           <img src="./images/cocktail.jpg" alt="coctail image name" />
  //         </div>
  //         <div class="drink-info">
  //           <h3 class="drink-name"></h3>
  //           <p class="'drink-desc"></p>
  //           <ul class="drink-ingredients">
  //             <li></li>
  //           </ul>
  //           <button onclick="renderData()">All Cocktails</button>
  //         </div>
  //       </div>
  //   `;

  //   wrapper.innerHTML += infoBox;
}
