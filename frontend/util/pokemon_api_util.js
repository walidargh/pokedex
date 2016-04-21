// var $ = require("jquery");
var AshDispatcher = require('../dispatcher/dispatcher.js');
var ServerActions = require('../actions/server_actions.js');

var PokemonApiUtil = {
  fetchAllPokemons: function() {
    $.ajax({
      url: '/api/pokemon',
      method: 'GET',
      dataType: 'json',
      success: function(pokemons) {
        ServerActions.receiveAllPokemons(pokemons);
      }
    });
  }
};

module.exports = PokemonApiUtil;
