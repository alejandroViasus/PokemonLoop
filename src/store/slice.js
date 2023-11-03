import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valueState",
  initialState: {
    user: {
      email: "",
      allPokemons:[],
    },
  },
  reducers: {
    changeUser: (state, action) => {
      return { ...state, user: { ...state.user, email: action.payload } };
    },
    getAllPokemons: (state, action) => {
        return { ...state, user: { ...state.user, allPokemons: action.payload } };
      },
  },
});

export const { changeUser ,getAllPokemons} = Slice.actions;
