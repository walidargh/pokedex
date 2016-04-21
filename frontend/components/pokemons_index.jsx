var React = require('react'),
    PokemonStore = require('../stores/pokemon_store.js'),
    ClientActions = require('../actions/client_actions.js');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return { pokemons: [] };
  },

  _onChange: function() {
    debugger
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
    return (
      <div>{this.state.pokemons.length}</div>
    );
  }
});

module.exports = PokemonsIndex;
