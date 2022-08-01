import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import './Containers/css/app.css';

import Home from "./Containers";

import List from "./Containers/List";

export default function App() {

  return (

        <BrowserRouter>
         <Routes>
            <Route index element={<Home/>} />
            <Route path={'/list'} element={<List/>} />
          </Routes>
        </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);