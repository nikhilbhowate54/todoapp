import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  task: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.task.push({ id: Date.now(), title: actions.payload });
    },
    deleteTodo: (state, actions) => {
      state.task = state.task.filter((item) => item.id !== actions.payload);
    },
  },
});

export const { addTodo,deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
