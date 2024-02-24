import React, { useRef, useState } from "react";
import Header from "./Header";
const Contact = () => {
  console.log("render contact");
  const focusPoint = useRef(null);
  const handleFocus=()=>{
    focusPoint.current.value='on click of my button text appeard'
    focusPoint.current.focus()
  }
  console.log(focusPoint);
  return (
    <div>
      <Header title="input field" />
      <textarea name="" id="" cols="30" rows="10" ref={focusPoint}></textarea>
      <button onClick={handleFocus}>click me</button>
    </div>
  );
};

export default Contact;
