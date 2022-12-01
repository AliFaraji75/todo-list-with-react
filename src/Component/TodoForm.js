import { useEffect, useRef, useState } from "react";

const TodoForms = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.text : "");
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  const changeHandler = (e) => {
    // console.log(e.target.value);
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("invali input");
      return;
    }
    props.addTodoHandler(todo);
    // console.log("to",todo);
    setTodo("");
  };
  return (
    <form onSubmit={submitHandler}  className="form-todo">
      {props.edit ? (
        <>
          <input
            type="text"
            value={todo}
            onChange={changeHandler}
            ref={inputref}
            placeholder="update todo item"
           
          />
          <button type="submit" className="form-btn">update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={todo}
            onChange={changeHandler}
            ref={inputref}
            placeholder="add new toto"
          />
          <button type="submit" className="form-btn">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForms;
