import { createSlice } from "@reduxjs/toolkit";
import { globalStateFormat } from "@/Assets/globalStateFormat";

export const Slice = createSlice({
  name: "valueState",
  initialState: globalStateFormat,
  reducers: {
    handlerVersion:(state,action)=>{
     // console.log(action.payload.version,'action hanlder version')
      return { ...state, version:action.payload.version};
    },
    updateUser: (state,action) => {
      return { ...state, user: action.payload.newUser };
    },
    setListPokemons:(state,action)=>{
      return { ...state, pokemonsUser: action.payload.listPokemons, version:action.payload.version};
    }

  },
});

export const { updateUser ,setListPokemons,handlerVersion} = Slice.actions;
