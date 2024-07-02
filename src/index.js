import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));  // root id naam ka element index.html me h  use tumne yha pe fetch kar liya   us element ko tumne ReactDOM ka root bna diya       phir us root element ke andar kuch render karna padega UI ko dikhane ke liye   to hamne usme render kar diya App wala component   
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  );