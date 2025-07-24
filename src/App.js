import logo from './logo.svg';
import './App.css';
import {Header} from "./Component/Header.js"; //headr file me const use kiya hai esliya {} isme likhana hota hai  
import Todos from "./Component/Todos.js"
import Footer from "./Component/Footer.js";


function App() {
  let todos = [
    {
        sno: 1,
        title: "Go to the market",
        desc : "i need go market becouse i tatke same coffi powder"
    },

     {
        sno: 2,
        title: "Go to the bazar",
        desc : "i need go market becouse i tatke same coffi powder"
    },

     {
        sno: 3,
        title: "Go to the Station",
        desc : "i need go market becouse i tatke same coffi powder"
    },

     {
        sno: 4,
        title: "Go to the mall",
        desc : "i need go market becouse i tatke same coffi powder"
    },
  ]
 
  return (
    <>
   <Header tital = {"To Do List"}/>
   <Todos todos ={todos}/>
   
   <Footer/>
   </>
  );
}

export default App;
