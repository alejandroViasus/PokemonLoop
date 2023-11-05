import { createSlice } from "@reduxjs/toolkit";
import { globalStateFormat } from "@/Assets/globalStateFormat";

export const Slice = createSlice({
  name: "valueState",
  initialState: globalStateFormat,
  reducers: {
    updateUser: (state,action) => {
      return { ...state, user: action.payload.newUser };
    },

  },
});

export const { updateUser } = Slice.actions;
