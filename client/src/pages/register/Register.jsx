import React, { useState } from 'react'
import "./Register.scss"
const Register = () => {
  const[file,setFile]= useState(null)
  const[user,setUser]= useState({ 
    username:"",
    email:"",
    password:"",
    img:"",
    country:"",
    isSeller:false,
    desc:""})

    console.log(user);
    const handleChange= (e)=>{
      setUser((prev)=>{
        return {...prev, [e.target.name]:e.target.value}
      })
    }


    const handleSeller= (e)=>{
      setUser((prev)=>{
        return {...prev, isSeller:e.target.checked}
      })
    }

  return (
    <div className="register">
    <form >
      <div className="left">
        <h1>Create a new account</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
        />
        <label htmlFor="">Password</label>
        <input name="password" type="password" onChange={handleChange} />
        <label htmlFor="">Profile Picture</label>
        <input type="file"  onChange={(e)=>setFile(e.target.files[0])}/>
        <label htmlFor="">Country</label>
        <input
          name="country"
          type="text"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </div>
      <div className="right">
        <h1>I want to become a seller</h1>
        <div className="toggle">
          <label htmlFor="">Activate the seller account</label>
          <label className="switch">
            <input type="checkbox" onChange={handleSeller} />
            <span className="slider round"></span>
          </label>
        </div>
        <label htmlFor="">Phone Number</label>
        <input
          name="phone"
          type="text"
        />
        <label htmlFor="">Description</label>
        <textarea
          placeholder="A short description of yourself"
          name="desc"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </div>
    </form>
  </div>
);
  
}

export default Register