import React from 'react';
import { connect } from 'dva';

import pokemonlist from './Pokemons.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    pokemonlist: state.app.pokemonlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loaddirectories: () => {
      dispatch({type: 'app/loadPokemon'});
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(pokemonlist);
