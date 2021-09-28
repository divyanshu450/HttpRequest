import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const Http = () => {
    const [Body, setBody] = useState()
    const [UserId, setUserId]= useState()
    const [Title, setTitle]= useState() 

    const changeUserId=(e)=>{
        console.log(e.target.value)
        setUserId(e.target.value)
    }
    const changeTitle=(e)=>{
        
        setTitle(e.target.value)
    }
    const changeBody=(e)=>{
        
        setBody(e.target.value)
    }

    async function postdata(e){
        e.preventDefault()
        const newData={userId:UserId, title:Title, body:Body}
        const postrequest = await axios.post("https://jsonplaceholder.typicode.com/posts", newData)  
        console.log("MY")
           

    }


    return (
        <div>
            <form>
                
                <input className="UID" type="text" value={UserId} onChange={changeUserId}/><br />
                <input className="Title" type="text" value={Title} onChange={changeTitle}/><br />
                <input className="Body" type="text" value={Body} onChange={changeBody}/><br />
                <button onClick={postdata}>Click Me</button>
                
            </form>
        </div>
    )
}


