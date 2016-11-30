import React from 'react';
import { connect } from 'dva';

import FolderTree from './FolderTree.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fields: [1,2,3,4,5]
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch({type: 'app/loadPokemon'});
  return {
    loaddirectories: console.log
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderTree);
