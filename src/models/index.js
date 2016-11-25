import { loaddirectories } from 'services';
import { parse } from 'qs';

export default {

  namespace: 'app',

  state: {
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
    *loaddirectories(action, {call, put}) {
      const data = yield call(loaddirectories);
      console.log(data)
    },
  },

  reducers: {
    fetchFolders(state, action) {
      return state;
    },
  },

}
