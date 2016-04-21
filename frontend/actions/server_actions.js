var AshDispatcher = require('../dispatcher/dispatcher.js'),
    PokemonConstants = require('../constants/pokemon_constants.js');

var ServerActions = {
  receiveAllPokemons: function (pokemons) {
    AshDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};

module.exports = ServerActions;
