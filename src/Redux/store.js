import { configureStore } from '@reduxjs/toolkit';
import { HeroReducer, MyInfoReducer, PasswordReducer } from './ReducersAction'; //the reducers

const store = configureStore({
  reducer: {
    password: PasswordReducer,
    hero: HeroReducer,
    info: MyInfoReducer,
  },
});

export default store;