import { useState } from "react"

function States()
{
  const [count,setCount] = useState(0)
  const [color,changeColor] = useState("blue")


  function increaseCount()
  {
    setCount(count+1)
  }

  function decreaseCount()
  {
    setCount(count-1)
  }

  function handleChange(e)
  {
    let value = e.currentTarget.value;
    changeColor(value)
  }

  return (
    <div style={{backgroundColor: color }}>
      <h1>Count is : {count} </h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>

      <input onChange={handleChange} type="color" />
    </div>
  )
}