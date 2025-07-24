import React from 'react'
import Todos from './Todos'

export default function Todoitem({todo}) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn text-center btn-danger'>Delete</button>
    </div>
  )
}
