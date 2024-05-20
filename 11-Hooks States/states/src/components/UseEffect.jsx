import {useState, useEffect} from "react"

function UseEffect() {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)

  function increaseCount1()
  {
    setCount(count+1) // 0 + 1 
  }

  function increaseCount2()
  {
    setCount2(count2+1)
    
  }
  /*
    [] => While the component is beign created
  */
  useEffect(  () => {
    console.log("Component is Mounted")
  } , []  )

   /*
     While the component is updated
  */
  useEffect( () => {
    console.log("Component is updated")
  } )

  useEffect( () => {
    console.log("Count 1 is Changed")
  } , [count])


  useEffect(()  => {
    console.log("Count 2 is chagned",count2)
  }, [count2])



  return (
    <div>
      <h1>Count  1 is : {count} </h1>
      <h1>Count 2 is : {count2} </h1>
      <button onClick={increaseCount1}> Increae count 1</button>
      <button onClick={increaseCount2}> Increae count 2</button>

     
    </div>
  )
}

export default useEffect
