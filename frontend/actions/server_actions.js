var AshDispatcher = require('../dispatcher/dispatcher.js'),
    PokemonConstants = require('../constants/pokemon_constants.js');

var ServerActions = {
  receiveAllPokemons: function (pokemons) {
    AshDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function(pokemon) {
    AshDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = ServerActions;
