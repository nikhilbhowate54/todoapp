import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Page/Nav";
import Todo from "./Page/Todo";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="*" element={<h1>no page found</h1>} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
