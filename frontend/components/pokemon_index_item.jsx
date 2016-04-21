var React = require('react'),
    PokemonStore = require('../stores/pokemon_store.js'),
    ClientActions = require('../actions/client_actions.js'),
    HashHistory = require('react-router').hashHistory;


var PokemonIndexItem = React.createClass({
  render: function () {
    return (
    <li className="poke-list-item" onClick={this.showDetail}>
      {this.props.pokemon.name}
    </li>
    );
  },

  showDetail: function() {
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  }
});

module.exports = PokemonIndexItem;
