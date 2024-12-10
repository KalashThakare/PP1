import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [captainData, setcaptainData] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault();
    setcaptainData({
      email:email,
      password:password
    })
    setemail('')
    setpassword('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-[4rem] mb-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />

        <form action="" onSubmit={submitHandler}>
        <h3 className='text-xl mb-2 font-semibold'>What's your email</h3>

        <input 
          value={email}
          onChange={(e)=>{
            setemail(e.target.value);
          }}
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-5'
          required type="email"
          placeholder='email@example.com'
        />

        <h3 className='text-xl mb-2 font-semibold'>Enter Password</h3>
        <input 
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value);
          }}
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-5'
          required type="password" 
          placeholder='password' 
        />

        <button className='text-white bg-[#111] font-semibold mb-7 rounded px-4 py-2 w-full'>
          Login
        </button>
        
        <p>
          New here?
          <Link 
            to='/captain-register'
            className='text-blue-600'
          >
            Create new account
          </Link>
        </p>

        </form>
      </div>

      <div>
        <Link
          to='/user-login'
          className='flex justify-center items-center text-white bg-[#d5622d] font-semibold mb-7 rounded px-4 py-2 w-full'>
          Log in as User
        </Link>
      </div>

    </div>
  )
}

export default Captainlogin