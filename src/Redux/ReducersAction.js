// src/redux/filesSlice.js
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const passwordSlice = createSlice({
  name: 'password',
  initialState: {
    password: 'qwerty654321',
  },
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setPassword } = passwordSlice.actions;
export const PasswordReducer = passwordSlice.reducer;


const HeroSlice = createSlice({
  name: 'fileCategory',
  initialState: {
    main: '',
    sub: '',
    cta: null,
    extra1: '',
    extra2: '',
  },
  reducers: {
    setHeroContent: (state, action) => {
      const {main, sub, cta, extra1, extra2} = action.payload;
      state.main = main
      state.sub = sub
      state.cta = cta
      state.extra2 = extra2
      state.extra1 = extra1

    }
  },
});

export const { setHeroContent } = HeroSlice.actions;
export const HeroReducer = HeroSlice.reducer;

const MyInfoSlice = createSlice({
  name: 'fileCategory',
  initialState: null,
  reducers: {
    setMyInfo: (state, action) => {      
      return action.payload
    }
  },
});

export const { setMyInfo } = MyInfoSlice.actions;
export const MyInfoReducer = MyInfoSlice.reducer;
