import React,{useState} from 'react'
import "./reigster.css"
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const UseNavigate = useNavigate()
  const [name,setName] = useState('')

  const [email,setEmail] = useState('')
  const [password,setPasssword] = useState('')
  const submitHandler = e => {
    e.preventDefault()
    
    UseNavigate('/')
  }
  return (
    <div style={{display:"flex",height:"100vh"}}>
        <div className='container'>

    <h1>Register</h1>
            <form onSubmit={submitHandler} className='input-box'>
                <input required onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder='Name' />
                <input required onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder='Email' />
                <input required onChange={(e)=>setPasssword(e.target.value)} type="text" name="password" placeholder='Password' />
                <button type='submit'>Register</button>
            </form>

        </div>
    </div>
  )
}

export default Register