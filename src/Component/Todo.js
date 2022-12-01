const Todo = ({todo,onComplete,onDelete,onEdit}) => {
    return ( 
        <div  key={todo.id} className="todo">
            <div onClick={onComplete} className={todo.compelte ? "complete" : ""} >{todo.text}</div>
            <div>
            <button className="edit" onClick={onEdit}>edit</button>
            <button className="remov"  onClick={onDelete} >Delete</button>
            </div>
            </div>
     );
}
 
export default Todo;