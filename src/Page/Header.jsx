import React, { memo } from "react";

const Header = (props) => {
  console.log("render header");
  return <div>Header {props.title}</div>;
};
// Context provides a way to pass data or state through the component tree 
// without having to pass props down manually through each nested component.
//  It is designed to share 
// data that can be considered as global data for a tree of React components
export default memo(Header);
