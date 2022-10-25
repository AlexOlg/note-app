import { useState } from "react"
import Todo from "./todo"
import './todoApp.css'

export default function TodoApp () {
    const [title,setTitle] = useState("Ingrese tarea...")
    const [todos,setTodos] = useState([])


    function handleChange (e) {
        const value = e.target.value
        setTitle(value)
    }
    //Subimos
    function handleSubmit (e){
        e.preventDefault(); 
        
        const newTodos = {
        id: crypto.randomUUID,
        title: title,
        completed: false,          
    };

    //Actualizamos el estado:
    const temp = [...todos];
    temp.unshift(newTodos);

    setTodos(temp)

    setTitle ("")
    }

    //Update
    function handleUpdate (id,value) {
        const temp = [...todos];
        const item = temp.find (item => item.id == id) 
        item.title = value
        setTodos(temp)
    }
    //Delele
    function handleDelete (id) {
        const temp = todos.filter(item => item.id != id)
        setTodos(temp)
    }
    return(
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    className="todoInput" 
                    value={title} />
                <input 
                    onClick={handleSubmit}
                    type="submit" 
                    value="Create todo"
                    className="buttonCreate"
                />
            </form>

            <div className="todosContainer">
                {todos.map (item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))}
            </div>
        </div>

    )
}