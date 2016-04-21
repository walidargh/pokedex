var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonsIndex = require('./pokemons_index');

var App = React.createClass({
  render: function(){
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex/>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
