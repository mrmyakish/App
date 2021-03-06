import { loaddirectories, loadPokemon } from 'services';
import { parse } from 'qs';
export default {

  namespace: 'app',

  state: {
    pokemonlist: [],
    folders: [],
    fields: [1,2,3,4,5],
    mods: [0,4,8,16],
    hex: [9,9,8,7]

  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *loadPokemon(action, {call, put}) {
      console.log('jkhkjhkhkjhkj');
      const {data} = yield call(loadPokemon);
      console.log(data);
      yield put({type: 'savePokemon', payload: data});
    }
  },

  reducers: {
    fetchFolders(state, action) {
      return state;
    },
    savePokemon(state, action) {
      return {
        ...state,
        pokemonlist: action.payload.results
      }
    },
  },


}
