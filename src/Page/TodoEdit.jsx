import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { renameTodo } from "../features/todo/todoSlice";

const TodoEdit = ({ item }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: item.title,
    des: item.des,
    id: item.id,
    edit: item.edit,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(renameTodo(input));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">title</label>
                <input
                  type="text"
                  className="form-control wt"
                  name="title"
                  value={input.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Descripation</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="des"
                  value={input.des}
                  className="form-control wt"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default TodoEdit;
