import React from "react";
import About from "./Page/About";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import {  Routes, Route } from "react-router-dom";
import Nav from "./Page/Nav";
import Create from "./Page/Create";
import Detail from "./Page/Detail";
import Todo from "./Page/Todo";
const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
          <Nav/>
        <Routes>
          <Route path="/" element={<Todo  />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/create' element={<Create/>}/>
          <Route path="/details/:sid" element={<Detail/>} />
          <Route path="*" element={<h1>no page found</h1>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
