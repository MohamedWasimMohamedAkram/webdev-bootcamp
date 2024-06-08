const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/02ed2f6ed8dabcb89037ec14cf0b2d61c56a7a74/sprites/pokemon/other/dream-world/";
const container = document.querySelector(".container");
for (let i = 1; i < 650; i++) {
  const pokemonDiv = document.createElement("div");
  const pokemonCount = document.createElement("span");
  const pokemonImg = document.createElement("img");

  pokemonDiv.classList.add("pokemon");
  pokemonImg.src = `${baseUrl}${i}.svg`;
  pokemonCount.innerText = `#${i}`;

  pokemonDiv.appendChild(pokemonImg);
  pokemonDiv.appendChild(pokemonCount);
  container.appendChild(pokemonDiv);
}
