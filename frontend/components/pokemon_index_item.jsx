var React = require('react'),
    PokemonStore = require('../stores/pokemon_store.js'),
    ClientActions = require('../actions/client_actions.js');

var PokemonIndexItem = React.createClass({
  render: function () {
    return <li className="poke-list-item">{this.props.pokemon.name}</li>;
  }
});

module.exports = PokemonIndexItem;
