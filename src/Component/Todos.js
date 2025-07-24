import React from 'react'
import Todoitem from "./Todoitem";

function Todos(props) {
  
  return (
    <div className='Container'>
      <h3 className='text-center my-3 '>Todos List</h3>
      {props.todos.map((todo) => {
        return <Todoitem todo = {todo}/>
        // ye loop claega or sab print ho jaye ga 
        // isme or kuch bhi likh sakte hai jase lekin <>    </>iske ander to waha clal ho jaye ga 
      })}
      <Todoitem todo = {props.todos[0]}/>  
      {/* ye dairect lega  */}
    </div>
  )
}

export default Todos