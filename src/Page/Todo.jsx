import React, { useState } from "react";
import { addTodo, deleteTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
  const todo = useSelector((state) => state.todo.task);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTodoTask = () => {
    if (text !== "") {
      try {
        dispatch(addTodo(text));
        setText("");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const deleteText = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <div className="container">
        <div className="input-group mb-3" style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-info" onClick={() => addTodoTask()}>
              Add
            </button>
          </div>
        </div>
        <br />
        <ul className="list-group">
          {todo &&
            todo.map((item) => {
              return (
                <li className="list-group-item" key={item.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>{item.title} </div>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteText(item.id)}
                    >
                      delete
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
