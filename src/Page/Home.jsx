import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
const Home = () => {
  const state = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <button className="btn btn-info" onClick={() => dispatch(increment())}>
          inc
        </button>
        {state}
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decrement())}
        >
          dec
        </button>
      </div>
    </>
  );
};

export default Home;
