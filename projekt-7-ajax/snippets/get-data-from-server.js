fetch("https://pokeapi.co/api/v2/pokemon")
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Response is not OK");
  })
  .then(data => {
    
  })
  .catch(error => console.log(error.message));


