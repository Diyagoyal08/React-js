import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";


function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

 

  return (
   <>
   <div className="mt-12">
    <h1 className="text-2xl font-bold mb-4">Todos</h1>
    <ul className="list-disc pl-5">
      {todos.map((todo) => (
        <li   className="mb-2 flex justify-between items-center"
        key={todo.id}>
          {todo.title}
          <button 
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
   </div>
   
   </>
  );
}

export default Todos;