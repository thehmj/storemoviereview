import './App.css';
import {BrowserRouter} from "react-router-dom";
import Add from './MyComponents/Add'; 
import Nav from './MyComponents/Nav';
import List from './MyComponents/List';

function App() {
  return (
  
    <BrowserRouter>
        <Nav/>
        <Add/>
       <List/>
    </BrowserRouter>
     
  );
}

export default App;
