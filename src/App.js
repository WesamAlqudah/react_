import './App.css'
import Dashboard from './Containers/pages/dashboard/Dashboard';
import{BrowserRouter} from "react";



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
