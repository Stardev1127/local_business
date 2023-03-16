import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

//Cuando no hay un componente, react toma la cadena y la vuelve un componente
//ReactDOM.render("Hola desde index.js", document.querySelector("#target"));



ReactDOM.render(<App />, document.querySelector("#target"));