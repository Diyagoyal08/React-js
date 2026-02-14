 
import { useState } from 'react'
function App() {
  const [color , setcolor] = useState("pink")

  return (
    <div className= "w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className="flex flex-col items-center justify-center h-full gap-5">
        <h1 className="text-3xl font-bold text-white">Change Background Color</h1>
        <div className="flex gap-5">
          <button onClick={() => setcolor("red")} className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200">red</button>
          <button onClick={() => setcolor("blue")} className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200">Blue</button>
          <button onClick={() => setcolor("green")} className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200">Green</button>
          <button onClick={() => setcolor("orange")} className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200">orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
