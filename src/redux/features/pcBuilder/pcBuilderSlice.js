const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  components: [],
  user: null,
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.components.push(action.payload);
    },

    removeFromBUild: (state, action) => {
      state.components = state.components.filter(
        (product) => product.id !== action.payload
      );
    },

    removeALlBuildComponents: (state) => {
      state.components = [];
    },
  },
});

export const { addToBuilder, removeFromBUild, removeALlBuildComponents } =
  pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
