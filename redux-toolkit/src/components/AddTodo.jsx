import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";



function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    } 
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
         <input
          type="text" 
           
          className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 

         placeholder="Enter todo" 
         value={input}
            onChange={(e) => setInput(e.target.value)}
            />
         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add Todo
         </button>

    </form>
  );
}

export default AddTodo;

