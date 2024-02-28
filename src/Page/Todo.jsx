import React, { useState } from "react";
import {
  addTodo,
  checkTodo,
  deleteTodo,
  editTodo,
  renameTodo,
} from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";
import TodoEdit from "./TodoEdit";

const Todo = () => {
  const todo = useSelector((state) => state.todo.task);
  const [text, setText] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const addTodoTask = () => {
    if (text !== "" && des !== "") {
      try {
        dispatch(addTodo({ title: text, des: des }));
        setText("");
        setDes("");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const deleteText = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleText = (id, text, edit) => {
    dispatch(renameTodo({ id, text, edit }));
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Todo App</h2>
        <h5 className="text-center">
          {/* this show us completed task */}
          completed task {todo?.filter((it) => it.done === true).length}
        </h5>
         {/* this show us pending task */}
        <h5 className="text-center">
          Pending task {todo?.filter((it) => it.done === false).length}
        </h5>
        <div className="input-group mb-3" style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <textarea
            className="form-control"
            placeholder="Description"
            rows="1"
            id="comment"
            name="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          ></textarea>
          <div className="input-group-append">
            <button className="btn btn-info " onClick={() => addTodoTask()}>
              <i className="fa fa-plus" aria-hidden="true"></i> Add
            </button>
          </div>
        </div>
        <br />
        {/* this will show the list of todo */}
        <ul className="list-group">
          {todo &&
            todo.map((item) => {
              return (
                <li className="list-group-item">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    className={item.done === false ? "" : "todocomplete"}
                    key={item.id}
                  >
                    {!item?.edit && (
                      <>
                        <div className="todo_title">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={item.done}
                            onChange={() =>
                              dispatch(
                                checkTodo({ id: item.id, check: item.done })
                              )
                            }
                          />
                          <div>
                            <h2 style={{ margin: ".6em" }}>{item.title} </h2>{" "}
                            <p style={{ margin: ".6em" }}>{item.des} </p>
                          </div>
                        </div>
                        <div>
                          <button
                            className="btn btn-warning btn_spacing"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="edit"
                            onClick={() => {
                              if (item.edit === false) {
                                dispatch(
                                  editTodo({ id: item.id, edit: item.edit })
                                );
                              }
                            }}
                          >
                            <i classNames="fa fa-edit" aria-hidden="true"></i>{" "}
                            {item.edit === false ? "Edit" : "Submit"}
                          </button>
                          <button
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="delete"
                            className="btn btn-danger btn_spacing"
                            onClick={() => deleteText(item.id)}
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                    {item.edit && (
                      <>
                        <TodoEdit item={item} />
                      </>
                    )}
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
