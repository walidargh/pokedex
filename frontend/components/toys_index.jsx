var React = require('react'),
    PokemonStore = require('../stores/pokemon_store.js'),
    ClientActions = require('../actions/client_actions.js'),
    PokemonIndexItem = require('./pokemon_index_item');

var ToysIndex = React.createClass({
  getInitialState: function() {
    return {toys: this.props.pokemon.toys};
  },

  _onChange: function(toys) {
    this.setState({toys: toys});
  },

  componentDidMount: function() {
    this.listener = PokemonStore.addListener(this._onChange);
    ClientActions.fetchAllToys(this.props.pokeId);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },


  render: function() {
    var toys = this.state.toys.map(function (toy) {
      return <ToyIndexItem key={toy.id} toy={toy} />;
    });
    return (
      <ul>
        {toys}
      </ul>
    );
  }
});

module.exports = ToysIndex;
