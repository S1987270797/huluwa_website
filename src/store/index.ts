import { createStore, Store, useStore as useVuexStore } from 'vuex';

import Home from './home/home';
import Login from './login/login';
import type { IRootState } from './types';
import type { IStore } from './types';

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'red',
      age: 20
    };
  },
  getters: {
    showWeight(state) {
      return state.age;
    }
  },
  mutations: {
    changeAge(state) {
      state.age = 22;
    }
  },
  actions: {},
  modules: {
    Home,
    Login
  }
});

export default store;

export function useStore(): Store<IStore> {
  return useVuexStore();
}
