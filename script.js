const pokedexContainer = document.getElementById('pokedex-container');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

fetch('https://corsproxy.io/?https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
  .then(response => response.json())
  .then(data => {
    function displayPokemon(pokemonList) {
      pokedexContainer.innerHTML = '';

      pokemonList.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        const name = document.createElement('h2');
        name.textContent = pokemon.name;

        const id = document.createElement('p');
        id.textContent = `ID: ${pokemon.id}`;

        const type = document.createElement('p');
        type.textContent = `Tipo: ${pokemon.type}`;

        const abilities = document.createElement('p');
        abilities.textContent = `Habilidades: ${pokemon.abilities.join(', ')}`;

        const image = document.createElement('img');
        image.src = pokemon.ThumbnailImage;
        image.alt = pokemon.name;

        pokemonCard.appendChild(image);
        pokemonCard.appendChild(name);
        pokemonCard.appendChild(id);
        pokemonCard.appendChild(type);
        pokemonCard.appendChild(abilities);
        pokedexContainer.appendChild(pokemonCard);

        // Event listener para abrir el modal
        pokemonCard.addEventListener('click', () => {
          // Actualizar el contenido del modal con la información del Pokémon
          $('#pokemonModalLabel').text(pokemon.name);
          $('#pokemonModalImage').attr('src', pokemon.ThumbnailImage);
          $('#pokemonModalNumber').text(pokemon.id); // Usamos 'id' como número
          $('#pokemonModalWeight').text(pokemon.weight);
          $('#pokemonModalHeight').text(pokemon.height);
          $('#pokemonModalAbilities').text(pokemon.abilities.join(', '));
          $('#pokemonModalWeakness').text(pokemon.weakness.join(', '));

          // Mostrar el modal
          $('#pokemonModal').modal('show');
        });
      });
    }

    displayPokemon(data);

    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const searchTerm = searchInput.value.toLowerCase();

      const filteredPokemon = data.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm);
      });

      displayPokemon(filteredPokemon);
    });
  });