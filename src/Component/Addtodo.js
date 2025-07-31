import React, { useState } from 'react'

const Addtodo = ({addtodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) =>{
        e.preventDefault(); // thet page not reload after submit 
        if(!title || !desc ){
            alert("Title and description can't be blank");
        }
        else{
        addtodo(title, desc);
        setDesc("");
        setTitle("");
        }
    }
    return (
        <div>
            <h3 className='text-center my-4'>Add TodoLists</h3>
        <div className='d-flex justify-content-center align-items-center'>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title}  onChange={(e)=>{setTitle(e.target.value)}} id="titel" aria-describedby="emailHelp" />
                    {/* value se fach ho rAHA HAI UPPER */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
        </div>
    )
}

export default Addtodo
// class replace className and for= replace htmlFor=