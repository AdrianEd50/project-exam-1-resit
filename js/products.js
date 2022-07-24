import { searchForRecepies } from "./ui/findRecepie.js";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "04cb0425dcmshc9f49d59b2b0019p106277jsn0da7af42f157",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

fetch(
  "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    const conteiner = document.getElementById("products-conteiner");
    const search = document.querySelector(".search");

    let recepiesToRender = response.results;

    function renderRecepies() {
      conteiner.innerHTML = "";

      recepiesToRender.forEach(function (result) {
        conteiner.innerHTML += `<div class ="featured-recepies">
                               <h4 class="heading">${result.name}</h4>
                               <h4 class="description">${result.description}</h4>
                               <h4>${result.yields}</h4>

                               <img src="${result.thumbnail_url}" alt="${result.name}"/>
                               
                              </div>`;
      });
    }

    //renderRecepies();

    search.onkeyup = function () {
      //console.log(event);

      const searchValue = event.target.value.trim().toLowerCase();
      const filterRecepies = recepiesToRender.filter(function (recepie) {
        if (recepie.name.toLowerCase().includes(searchValue)) {
          return true;
        }
      });

      console.log(filterRecepies);

      recepiesToRender = filterRecepies;
      //recepiesToRender();

      renderRecepies();
    };
  })

  .catch((err) => console.error(err));
