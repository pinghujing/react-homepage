import './App.css';
import Router from "./router"
import axios from "axios"
import MainBox from "./view/MainBox/MainBox";
import Login from "./view/Login/Login";
function App() {
  return (
    <div className="App">
      <Router></Router>
      <Login></Login>
    </div>
  );
}

export default App;
