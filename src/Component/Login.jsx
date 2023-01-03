import axios from 'axios'
import React, { useState } from 'react'

export const Login = () => {

    const [data, setData] = useState([])
    const [token, setToken] = useState('')

     const [payload, setPayload] = useState({
        email  : "",
        password : ""
     })

     const handleChange = (e) => {
      const {name, value} = e.target
      setPayload({...payload, [name] : value})

     }

     const handleSubmit = async(e) => {
        e.preventDefault();
        setData([...data, payload])

        let r = await axios.post("https://reqres.in/api/login", payload)

        setToken(r.data.token)

     }

      console.log("data", data)


  return (
    <div>

        <h1>{token === '' ? "" : token}</h1>     
        <div>
          <input
            onChange={handleChange}
            value={payload.email}
            type="text"
            name="email"
            placeholder="name"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            value={payload.password}
            type="text"
            name="password"
            placeholder="password"
          />
        </div>
        <div>
           {token === '' ? <button onClick={handleSubmit}>Login</button> : <button
           onClick={() => setToken('')}>Logout</button>}
        </div>
    </div>
  )
}
