import { useEffect, useState } from "react";
import Filter from "./Filter";
import TodoForms from "./TodoForm";
import TodoList from "./TodoList";


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterdtodos, setFiltertodos] = useState([]);
  const [status,setStatus]=useState("All");
useEffect(()=>{
  filterTodos(status);
  console.log("use")
},[todos,status])
  const addTodoHandler = (input) => {
    //console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      compelte: false,
    };
    setTodos([...todos, newTodo]);
   
  };
  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectetodo = todos[index];
    selectetodo.compelte = !selectetodo.compelte;
    const updateTodo = [...todos];
    updateTodo[index] = selectetodo;
    setTodos(updateTodo);
    //console.log(selectetodo);
  };
  const deleteHandler = (id) => {
    //console.log(id);
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };
  const onEdit =(id,newvalue)=>{
    console.log(id,newvalue)
    const index = todos.findIndex((todo) => todo.id === id);
    const selectetodo = todos[index];
    selectetodo.text = newvalue;
    const updateTodo = [...todos];
    updateTodo[index] = selectetodo;
    setTodos(updateTodo);
  }
  const filterTodos =(status)=>{
    switch (status){
      
      
      case "uncompleted":
        
        setFiltertodos(todos.filter(todo =>!todo.compelte))
        console.log(filterdtodos);
        
      break
        case "Completed":
          
          setFiltertodos(todos.filter(todo => todo.compelte))
          console.log(filterdtodos);
          
       break
          default :
            setFiltertodos(todos)
            console.log(filterdtodos);
          
          

    }
  };
  return (
    <div className="container">
      <div className="navbar">
      <Filter filterTodos={filterTodos} status={status} setStatus={setStatus} />
      <TodoForms addTodoHandler={addTodoHandler} />
     
      </div>
      <TodoList
        todos={filterdtodos}
        onDelete={deleteHandler}
        onEdit={onEdit}
        onComplete={completeHandler}
      />
    </div>
  );
};

export default TodoApp;
