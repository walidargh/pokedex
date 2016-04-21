var React = require('react'),
    PokemonStore = require('../stores/pokemon_store.js'),
    ClientActions = require('../actions/client_actions.js'),
    PokemonIndexItem = require('./pokemon_index_item');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return { pokemons: [] };
  },

  _onChange: function() {
    this.setState({pokemons: PokemonStore.all()});
  },

  // componentWillMount: function() {
  //   ClientActions.fetchAllPokemons();
  // },

  componentDidMount: function() {
    PokemonStore.addListener(this._onChange);
    ClientActions.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    PokemonStore.removeListener(this._onChange);
  },

  render: function() {
    var pokemons = this.state.pokemons.map(function (pokemon) {
      return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
    });
    return (
      <ul>
        {pokemons}
      </ul>
    );
  }
});

module.exports = PokemonsIndex;
