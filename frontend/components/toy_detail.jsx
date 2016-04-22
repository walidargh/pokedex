var React = require('react');
var PokemonStore = require('../stores/pokemon_store');
var ClientActions = require('../actions/client_actions');


var ToyDetail = React.createClass({
  getInitialState: function () {
    return {toy: this.getStateFromStore()};
  },
  getStateFromStore: function () {
    var pokeId = parseInt(this.props.params.pokemonId);
    return PokemonStore.find(pokeId).toys[this.params.toyId];
  },

  componentWillReceiveProps: function (newProps) {
    var pokeId = newProps.params.pokemondId;
    ClientActions.fetchSinglePokemon(pokeId);
  },

  componentWillMount: function() {
    this.listener = PokemonStore.addListener(this._onChange);
  },


  render: function() {
    return (
      <div>
        Some Details
      </div>
    );
  }

});

module.exports = ToyDetail;
