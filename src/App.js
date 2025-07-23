import logo from './logo.svg';
import './App.css';
import {Header} from "./Component/Header.js"; //headr file me const use kiya hai esliya {} isme likhana hota hai  
import Todos from "./Component/Todos.js"
import Footer from "./Component/Footer.js";


function App() {
 
  return (
    <>
   <Header tital = {"To Do List"}/>
   <Todos/>
   <Footer/>
   </>
  );
}

export default App;
