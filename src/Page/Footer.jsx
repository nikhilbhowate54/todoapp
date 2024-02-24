import React, { useReducer } from "react";
import Blog from "./Blog";
const Footer = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      case "reset":
        return 0;
      default:
        throw new Error("wrong action");
    }
  };
  const initialstate = 0;
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <Blog />
    </>
  );
};

export default Footer;
