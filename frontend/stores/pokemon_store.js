var AshDispatcher = require('../dispatcher/dispatcher'),
    Store = require ("flux/utils").Store,
    PokemonConstants = require('../constants/pokemon_constants.js');

var PokemonStore = new Store(AshDispatcher);
var _pokemons = {};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      PokemonStore.resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      PokemonStore.resetPokemonDetail(payload.pokemon);
      break;
  }
};

PokemonStore.all = function() {
  var results = [];
  Object.keys(_pokemons).forEach(function (key) {
    results.push(_pokemons[key]);
  });
  return results;
};
PokemonStore.resetPokemonDetail = function (pokemon) {
  _pokemons[pokemon.id] = pokemon;
  this.__emitChange();
};
PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach( function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  this.__emitChange();
};

PokemonStore.find = function (id) {
  return _pokemons[id];
};
module.exports = PokemonStore;
