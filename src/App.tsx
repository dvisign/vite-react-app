import { useState } from "react"
import Grid from "@/components/Grid"
import "@/App.css"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
      <br />
      <Grid />
    </>
  )
}

export default App
