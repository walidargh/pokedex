var React = require('react'),
    PokemonStore = require('../stores/pokemon_store.js'),
    ClientActions = require('../actions/client_actions.js'),
    ToyIndexItem = require('./toy_index_item'),
    PokemonIndexItem = require('./pokemon_index_item');

var ToysIndex = React.createClass({
  getInitialState: function() {
    return {toys: this.props.pokemon.toys};
  },

  componentWillReceiveProps: function () {

  },

  componentDidMount: function() {
    this.listener = PokemonStore.addListener(this._onChange);
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
