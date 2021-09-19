import './App.css';
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  const routes = useRoutes();
  return (
      <BrowserRouter>
        <div className="App">
          {routes}
        </div>
      </BrowserRouter>
  );
}

export default App;
