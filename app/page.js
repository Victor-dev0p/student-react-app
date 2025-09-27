"use client"
import { useContext, useState } from "react"
// import Welcome from "@/components/explore";
import { ThemeContext } from "@/utils/ThemeContext";
import { FaUsers } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);
  
  return(
    <div style = {{background: theme === 'light' ? 'fff' : '#333', color: theme === 'light' ? '#0000': 'ffff'}}>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count +1)}>Click me <FaUsers /></button>
    </div> 
  )
  
}

function ThemeWrapper () {
  return (
    <ThemeContext.Provider value="">
      <App />
    </ThemeContext.Provider>
  )
}

export default ThemeWrapper