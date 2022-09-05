import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import './Containers/css/app.css';

import Home from "./Containers";

import List from "./Containers/List";


import store from './Containers/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

export default function App() {

  return (

        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

        <BrowserRouter>
         <Routes>
            <Route index element={<Home/>} />
            <Route path={'/list'} element={<List/>} />
          </Routes>
        </BrowserRouter>

        </PersistGate>
        </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);