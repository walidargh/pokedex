var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonApiUtil = require('./util/pokemon_api_util'),
    PokemonStore = require('./stores/pokemon_store'),
    PokemonsIndex = require('./components/pokemons_index'),
    ClientActions = require('./actions/client_actions'),
    Router = require('react-router').Router,
    Route = require('react-router').Route;

document.addEventListener('DOMContentLoaded', function()
  {
    ReactDOM.render(
      <PokemonsIndex />,
      document.getElementById('root')
    );
  }
);
