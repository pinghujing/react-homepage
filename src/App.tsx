import './App.css';
import Router from "./router"
import axios from "axios"
console.log(2222);

axios.get('http://localhost:9000/rights?_embed=children').then(res=>{
      console.log(33333,res.data);
    })
function App() {
  return (
    <div className="App">
      888888
      <Router></Router>
    </div>
  );
}

export default App;
