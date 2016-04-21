var React = require('react');
var ReactDOM = require('react-dom');
var PokemonStore = require('../stores/pokemon_store');
var PokemonsIndex = require('./pokemons_index');
var ClientActions = require('../actions/client_actions');

var ToyIndexItem = React.createClass({
  handleClick: function () {
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  },

  render: function () {
    return <li onClick={this.handleClick} className="toy-list-item">
      <p>Name:{this.props.toy.name}</p>
      <p>Happiness:{this.props.toy.happiness}</p>
      <p>Price:{this.props.toy.price}</p>
    </li>;
  }

});
