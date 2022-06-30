import { Module } from 'vuex';
import type { ILoginState } from './login-types';
import type { IRootState } from '../types';

const Login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      hello: 'hello we are login module'
    };
  },
  getters: {},
  mutations: {},
  actions: {}
};

export default Login;
