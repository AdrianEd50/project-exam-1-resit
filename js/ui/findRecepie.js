export function searchForRecepies(recepies) {
  const search = document.querySelector(".search");

  search.onkeyUp = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredRecepies = recepies.filter(function (recepie) {
      if (
        recepie.sections.components.ingredients.name
          .toLowerCase()
          .includes(searchValue)
      ) {
        return true;
      }
    });
    result(filteredRecepies);
  };
}

/*export function getRecepies(recepiesToGet) {
  const conteiner = document.querySelector(".products-conteiner");

  conteiner.innerHTML = "";

  recepiesToGet.forEach(function (result) {
    conteiner.innerHTML += `<div>
                         <h4>${result.name}</h4>
                         <h4>${result.description}</h4>
                         <h4>${result.yields}</h4>

                         <img src="${result.thumbnail_url}" alt="${result.name}"/>
                         
                        </div>`;
  });

  //getRecepies();
}*/
