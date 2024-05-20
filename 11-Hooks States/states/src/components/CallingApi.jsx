import { useState } from "react"
function CallingApi()
{
   const [data,setData] = useState(null)

  function callApi()
  {
    
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
            
  }

  console.log(data)
  return (
    <div>
      <h1>Product Data</h1>
      {
        data == null ? <p>NO data is there please clikc on the button to fetch data </p> : 
        <div>
        <p>Brand: {data.brand}</p>
        <p>Description: {data.description}</p>
        <img src={data.thumbnail} />

        <h2>Images</h2>
        {data.images.map( (item,index) => {
         return <img src={item} />
        })}
        </div>
      }
      

      <button onClick={callApi}>Fetch Data</button>
    </div>
  )
}