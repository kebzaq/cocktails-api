const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
const wrapper = document.querySelector(".wrapper");

function getCocktails() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      renderData(data.drinks);
    })

    .catch((error) => {
      console.log(error);
    });
}
getCocktails();

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
         <a href="">
         <div class="box" data-id="${data[i].idDrink}">
         <img src="${data[i].strDrinkThumb}" alt="coctail image name" />
         <h3 class="title">${data[i].strDrink}</h3>
         </div>
        </a>   
        `;
    console.log(box);
    wrapper.innerHTML += box;
  }
}

// each cocktail
function showCocktailDetails() {
  const infoBox = `

    `;

  wrapper.innerHTML += infoBox;
}
