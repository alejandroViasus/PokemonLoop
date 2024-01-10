import { createSlice } from "@reduxjs/toolkit";
import { globalStateFormat } from "@/Assets/globalStateFormat";
import { pokemonGet } from "@/Assets/funcions";

export const Slice = createSlice({
  name: "valueState",
  initialState: globalStateFormat,
  reducers: {
    updateTeam: (state, action) => {
      return { ...state, teamUser: action.payload.teamUser };
    },
    updateUser: (state, action) => {
      const user= action.payload.newUser
      user.level = pokemonGet.calcularNivel(user.experience)
      return { ...state, user };
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
