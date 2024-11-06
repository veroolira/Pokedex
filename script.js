const pokedexContainer = document.getElementById('pokedex-container');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

fetch('https://corsproxy.io/?https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
  .then(response => response.json())
  .then(data => {

    function createPokemonCard(pokemon) {
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

      // Event listener para abrir el modal
      pokemonCard.addEventListener('click', () => {
        $('#pokemonModalLabel').text(pokemon.name);
        $('#pokemonModalImage').attr('src', pokemon.ThumbnailImage);
        $('#pokemonModalNumber').text(pokemon.id);
        $('#pokemonModalWeight').text(pokemon.weight);
        $('#pokemonModalHeight').text(pokemon.height);
        $('#pokemonModalAbilities').text(pokemon.abilities.join(', '));
        $('#pokemonModalWeakness').text(pokemon.weakness.join(', '));

        $('#pokemonModal').modal('show');
      });

      return pokemonCard;
    }

    function displayPokemon(pokemonList) {
      pokedexContainer.innerHTML = ''; // Limpiar el contenedor una sola vez

      pokemonList.forEach(pokemon => {
        const pokemonCard = createPokemonCard(pokemon);
        pokedexContainer.appendChild(pokemonCard);
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

  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error al cargar los datos. Por favor, intenta de nuevo más tarde.';
    errorMessage.style.color = 'red';
    pokedexContainer.appendChild(errorMessage);
  });