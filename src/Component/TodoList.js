import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onEdit }) => {
  const [edit, setEdit] = useState({ id: null, text: "", complete: false });
  const editTodo = (newvalue) => {
    console.log(newvalue);
    onEdit(edit.id,newvalue);
    setEdit({ id: null, text: "", complete: false })
  };
  const todoRender = () => {
    if (todos.length === 0) return <div>add some todo</div>;
    // console.log(onComplete)
    return (
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div>{edit.id ? <TodoForm addTodoHandler={editTodo} edit={edit} /> : todoRender()}</div>
  );
};

export default TodoList;
