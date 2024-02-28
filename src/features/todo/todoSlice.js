import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  task: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const { title, des } = actions.payload;
      state.task.push({
        id: Date.now(),
        title: title,
        des: des,
        done: false,
        edit: false,
      });
    },
    deleteTodo: (state, actions) => {
      state.task = state.task.filter((item) => item.id !== actions.payload);
    },
    editTodo: (state, actions) => {
      const { id, edit } = actions.payload;
      let res = state.task.find((item) => item.id === id);
      res.edit = !edit;
    },
    renameTodo: (state, actions) => {
      const { id, edit, title,des } = actions.payload;
      let res = state.task.find((item) => item.id === id);
      res.title = title;
      res.des=des;
      res.edit=!edit
    },
    checkTodo: (state, actions) => {
      const { id, check } = actions.payload;
      let res = state.task.find((item) => item.id === id);
      res.done = !check;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, renameTodo, checkTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
