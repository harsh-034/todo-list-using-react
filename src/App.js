import logo from './logo.svg';
import './App.css';
import {Header} from "./Component/Header.js"; //headr file me const use kiya hai esliya {} isme likhana hota hai  
import Todos from "./Component/Todos.js"
import Footer from "./Component/Footer.js";
import Addtodo from "./Component/Addtodo.js";
import {About}from "./Component/About";
import React, {useState, useEffect} from 'react' // hook import in dthe 


function App() {
  let initTodo;
if(localStorage.getItem("todos")===null){
  initTodo =[];// null difid karta hai 
}  else {
 initTodo = JSON.parse(localStorage.getItem("todos"));
}

   const onDelete =(todo) => {
    console.log("i am ondelete of today", todo);
    //deleting are not work this reaceact becouse ther are run on anguler
    // let index = todos.indexof(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("delted", todos);
    localStorage.setItem("todos", JSON.stringify(todos)); // jo todo ban chuka hai wo delete kar do 
   }


   const addtodo = (title, desc) =>{
    console.log("I am adding thish todo", title, desc)
    let sno;
    if(todos.length == 0){
      sno = 0;
    }
    else{
     sno = todos[todos.length - 1].sno + 1;
    }
    
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);  //print karne ke liya add kiya use state me 
    console.log(myTodo);
   }


   //print all totdos list  without iske nahi print ho ga 
  const [todos, setTodos] = useState( initTodo); //ye [] null hai faltu kuch nahi hai 
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

  // const [todos, setTodos] = useState( [
  //   {
  //       sno: 1,
  //       title: "Go to the market",
  //       desc : "i need go market becouse i tatke same coffi powder"
  //   },

  //    {
  //       sno: 2,
  //       title: "Go to the bazar",
  //       desc : "i need go market becouse i tatke same coffi powder"
  //   },

  //    {
  //       sno: 3,
  //       title: "Go to the Station",
  //       desc : "i need go market becouse i tatke same coffi powder"
  //   },

  //    {
  //       sno: 4,
  //       title: "Go to the mall",
  //       desc : "i need go market becouse i tatke same coffi powder"
  //   },
  // ]);    //ye sirf wahi print karana hai jo ki pahle se ho to ye use karenge 
 
  return (
    <>
   <Header title = {"To Do List"}/>
    
      <Addtodo addtodo = {addtodo} />
   <Todos todos ={todos} onDelete={onDelete}/>
       
   
     <Footer/>
     </>
      

   

   

   





  
  

  );
}

export default App;
