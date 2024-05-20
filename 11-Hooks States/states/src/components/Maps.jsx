import { useState } from "react"
function Maps()
{
    const [users, setUsers] = useState([
        {
          name: "Ashsih",
          age: "23"
        },
        {
          name: "Nishta",
          age:"23"
        },
        {
          name:"Rahul",
          age:"21"
        }
      ])
    
      return (
        <div>
          {users.map( (item,index) => {
            return <div>
                <p>{item.name}</p>
                <p>{item.age}</p>
                <hr />
              </div>
          })}
        </div>
      )
}