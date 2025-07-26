import React from 'react'
import Todoitem from "./Todoitem";

function Todos(props) {
  let mystyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='Container text-center my-4' style={mystyle}>
      <h3 className='text-center my-3 '>Todos List</h3>
      {props.todos.length===0? "No todosto displaye":
      props.todos.map((todo) => {
        return(<div>
      
        <Todoitem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
          </div>
      )
        // ye loop claega or sab print ho jaye ga 
        // isme or kuch bhi likh sakte hai jase lekin <>    </>iske ander to waha clal ho jaye ga 
      })}
      {/* <Todoitem todo = {props.todos[0]}/>   */}
      {/* ye dairect lega  */}
    </div>
  )
}

export default Todos