import { IHomeState } from './home/home-types';
import { ILoginState } from './login/login-types';

export interface IRootState {
  name: string;
  age: number;
}

export interface IModuleState {
  Home: IHomeState;
  Login: ILoginState;
}

export type IStore = IRootState & IModuleState;
