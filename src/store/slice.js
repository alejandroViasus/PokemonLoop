import { createSlice } from "@reduxjs/toolkit";
import { globalStateFormat } from "@/Assets/globalStateFormat";

export const Slice = createSlice({
  name: "valueState",
  initialState: globalStateFormat,
  reducers: {
    updateUser: (state,action) => {
      return { ...state, user: action.payload.newUser };
    },
    setListPokemons:(state,action)=>{
      return { ...state, pokemonsUser: action.payload.listPokemons};
    }

  },
});

export const { updateUser ,setListPokemons} = Slice.actions;
