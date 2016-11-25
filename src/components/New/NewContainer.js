import React from 'react';
import { connect } from 'dva';

import New from './New.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fields: state.app.fields,
    mods:  state.app.mods,
    hex:  state.app.hex
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch({type: 'app/loaddirectories'})
  return {
    loaddirectories: console.log
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New);
