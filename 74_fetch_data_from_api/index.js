async function fetchDataPokeMon() {
  const inputValue = document.getElementById("PokemonName").value.toLowerCase().trim();
  const img = document.getElementById("ImgPokeMon");
  const nameDisplay = document.getElementById("pokemon-name");

  if (!inputValue) {
    nameDisplay.textContent = "Please enter a Pokémon name.";
    img.style.display = "none";
    return;
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
    if (!res.ok) throw new Error("Pokémon not found!");

    const data = await res.json();

    nameDisplay.textContent = data.name.toUpperCase();
    img.src = data.sprites.front_default;
    img.style.display = "block";
  } catch (error) {
    nameDisplay.textContent = "❌ Error: " + error.message;
    img.style.display = "none";
    console.error(error);
  }
}
