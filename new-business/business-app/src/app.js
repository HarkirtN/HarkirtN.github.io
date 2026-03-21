import React from "react";
import ReactDOM from "react-dom/client";
import classComponent from "./component.js";

//class classComponent extends React.Component {
// constructor() {
//  super();
// this.state = {
//  first_name: Peter,
//  last_name: parker,
//  };
// }
//render() {
//  return (
//   <h1>
//     Hello Im {this.state.first_name} {this.state.last_name}
//   </h1>
// );
//}
//}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<classComponent first_name="David"></classComponent>);

// class components need three elements - extend react components, render method and then return html code
// to render a class component
