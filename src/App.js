import './App.css'
import{BrowserRouter} from "react";
import Dashboard from './pages/dashboard/Dashboard';

function App() {


  return (
      <BrowserRouter>
          <div className="App">
              <h1> Welcome WAA </h1>
              <Dashboard/>

          </div>
      </BrowserRouter>
  );
}

export default App;
