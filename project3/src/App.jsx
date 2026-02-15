 import { useState, useCallback , useEffect, use } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = ""

    if (includeUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeLowercase) str += "abcdefghijklmnopqrstuvwxyz"
    if (includeNumbers) str += "0123456789"
    if (includeSymbols) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    if (str === "") return

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])
 useEffect(() => {
  generatePassword()
 }, [ generatePassword])
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="w-[400px] p-6 bg-gray-800 rounded-lg">
          
          <h2 className="text-2xl font-bold mb-4">Password Generator</h2>

          <div className="flex shadow-md rounded-lg mb-4">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full p-2 bg-gray-700 text-white rounded-l-lg"
            />
            <button
              onClick={() => navigator.clipboard.writeText(password)}
              className="bg-blue-500 px-4 py-2 rounded-r-lg"
            >
              Copy
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Length: {length}</label>
            <input
              type="range"
              min="8"
              max="20"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4 space-y-2">
            <label className="block">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="mr-2"
              />
              Include Uppercase
            </label>

            <label className="block">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="mr-2"
              />
              Include Lowercase
            </label>

            <label className="block">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="mr-2"
              />
              Include Numbers
            </label>

            <label className="block">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="mr-2"
              />
              Include Symbols
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="w-full bg-blue-500 py-2 rounded"
          >
            Generate Password
          </button>

        

        </div>
      </div>
    </>
  )
}

export default App
