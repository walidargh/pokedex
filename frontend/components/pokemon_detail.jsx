var React = require('react');
var ReactDOM = require('react-dom');
var PokemonStore = require('../stores/pokemon_store');
var PokemonsIndex = require('./pokemons_index');
var ClientActions = require('../actions/client_actions');
var ToysIndex = require('./toys_index');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return {pokemon: this.getStateFromStore()};
  },

  getStateFromStore: function () {
    var pokeId = parseInt(this.props.params.pokemonId);
    return PokemonStore.find(pokeId);
  },

  componentWillReceiveProps: function(newProps) {
    var pokeId = newProps.params.pokemonId;
    ClientActions.fetchSinglePokemon(pokeId);
  },

  componentWillMount: function() {
    this.listener = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({pokemon: this.getStateFromStore()});
  },

  render: function () {
    var details;
    if (this.state.pokemon) {
      details = [
        <img src={this.state.pokemon.image_url}/>,
        <p>Name: {this.state.pokemon.name}</p>,
        <p>Attack: {this.state.pokemon.attack}</p>,
        <p>Defense: {this.state.pokemon.defense}</p>,
        <p>Type: {this.state.pokemon.poke_type}</p>
      ];
    } else {
      details = <div></div>;
    }
    debugger;
    return(
      <div>
        <div className="pokeon-detail-pane">
          <div className="detail">
            {details}
            // <ToysIndex pokeId={this.state.pokemon.id}/>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = PokemonDetail;
