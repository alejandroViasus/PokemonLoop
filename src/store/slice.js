import { createSlice } from "@reduxjs/toolkit";
import { globalStateFormat } from "@/Assets/globalStateFormat";

export const Slice = createSlice({
  name: "valueState",
  initialState: globalStateFormat,
  reducers: {
    updateTeam: (state, action) => {
      return { ...state, user: action.payload.newUser };
    },
    updateUser: (state, action) => {
      return { ...state, teamUser: action.payload.newUser };
    },
    setListPokemons: (state, action) => {
      return {
        ...state,
        pokemonsUser: action.payload.listPokemons,
        version: action.payload.version,
      };
    },
    handlerRender: (state, action) => {
      return { ...state, render: action.payload.render };
    },
    handlerVersion: (state, action) => {
      // console.log(action.payload.version,'action hanlder version')
      return { ...state, version: action.payload.version };
    },
  },
});

export const { updateTeam,updateUser, setListPokemons, handlerVersion, handlerRender } =
  Slice.actions;
