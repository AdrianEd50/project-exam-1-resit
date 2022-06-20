const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "04cb0425dcmshc9f49d59b2b0019p106277jsn0da7af42f157",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

fetch(
  "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
