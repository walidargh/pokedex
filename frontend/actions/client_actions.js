var PokemonApiUtil = require('../util/pokemon_api_util.js');
var PokemonConstants = require('../constants/pokemon_constants.js');

var ClientActions = {

  fetchAllPokemons: function() {
    PokemonApiUtil.fetchAllPokemons();
  },

  fetchSinglePokemon: function(id) {
    PokemonApiUtil.fetchSinglePokemon(id);
  }

};

module.exports = ClientActions;
