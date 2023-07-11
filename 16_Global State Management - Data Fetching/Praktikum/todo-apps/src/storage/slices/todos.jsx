import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: [
    {
      id: 1,
      title: "Mengerjakan Excercise",
      completed: true,
    },
    {
      id: 2,
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.dataList.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.dataList = state.dataList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, deleteItem } = todosSlice.actions;
export default todosSlice.reducer;
