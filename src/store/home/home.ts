import { Module } from 'vuex';
import type { IHomeState } from './home-types';
import type { IRootState } from '../types';

const Home: Module<IHomeState, IRootState> = {
  namespaced: true,
  state() {
    return {
      invitationProgress: 3
    };
  },
  getters: {},
  mutations: {},
  actions: {}
};

export default Home;
