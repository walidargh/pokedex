var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonApiUtil = require('./util/pokemon_api_util'),
    PokemonStore = require('./stores/pokemon_store'),
    PokemonsIndex = require('./components/pokemons_index'),
    ClientActions = require('./actions/client_actions');

document.addEventListener('DOMContenLoaded', function()
  {
    console.log("loading");
    ReactDOM.render(
      <div>Hello</div>,
      document.getElementById('root')
    );
  }
);
