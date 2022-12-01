import { useState } from "react";

const Filter = ({filterTodos,status,setStatus}) => {     
  
const changeHandler= (e)=>{
   setStatus(e.target.value);
   filterTodos(status);
}

    return ( 
        <header className="filter-selection">
            <select onChange={changeHandler} value={status}>
                <option value={"All"}>All</option>
                <option value={"Completed"}>Completed</option>
                <option value={"uncompleted"}>uncompleted</option>

            </select>
 
        </header>
     );
}
 
export default Filter;