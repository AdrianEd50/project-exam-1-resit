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
