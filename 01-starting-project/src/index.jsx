import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDOM.createRoot(entryPoint).render(React.createElement(App)); // 컴포넌트 타입
