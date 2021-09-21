import React from 'react'
import './App.css';
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  const routes = useRoutes();
  return (
      <div className="App">
          <BrowserRouter>
              {routes}
          </BrowserRouter>
      </div>);
}

export default App;
