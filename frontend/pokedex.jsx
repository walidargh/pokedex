var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./components/app'),
    PokemonApiUtil = require('./util/pokemon_api_util'),
    PokemonStore = require('./stores/pokemon_store'),
    PokemonsIndex = require('./components/pokemons_index'),
    PokemonDetail = require('./components/pokemon_detail'),
    ClientActions = require('./actions/client_actions'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    HashHistory = require('react-router').hashHistory;

document.addEventListener('DOMContentLoaded', function(){
    var router =
      <Router history={HashHistory}>
        <Route path="/" component={App}>
            <Route path="pokemon/:pokemonId" component={PokemonDetail}/>
        </Route>
    </Router>;
    var root = document.getElementById('root');

    ReactDOM.render(router, root);
  }
);
