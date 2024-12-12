import React, { useState } from 'react'
import { data, Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../Context/userContext';


const UserSignup = () => {

  const [email, setemail] = useState('')
  const [Firstname, setFirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})

  const Navigate=useNavigate();

  const {user,setUser}=React.useContext(UserDataContext)

  const submitHandler=async (e)=>{
    e.preventDefault();
    const newUser={
      fullname:{
        firstname:Firstname,
        lastname:lastname,
      },
      email:email,
      password:password
    }

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

    if (response.status==201){
      const data=response.data
      setUser(data.user)
      Navigate('/home')
    }

    setFirstname('')
    setlastname('')
    setemail('')
    setpassword('')

  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-[4rem] mb-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />

        <form action="" onSubmit={submitHandler}>

        <h3 className='text-xl mb-2 font-semibold'>Enter your fullname</h3>

          <div className='flex gap-4'>

            <input 
              value={Firstname}
              onChange={(e)=>{
                setFirstname(e.target.value);
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base mb-5'
              required type="text"
              placeholder='Firstname'
            />

            <input 
              value={lastname}
              onChange={(e)=>{
                setlastname(e.target.value);
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base mb-5'
              required type="text"
              placeholder='Lastname'
            />

          </div>

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
            Sign in
          </button>
          
          <p>
            Alredy have a account?
            <Link 
              to='/user-login'
              className='text-blue-600'
            >
              Login here
            </Link>
          </p>

        </form>
      </div>

      {/* <div>
        <Link
          to='/user-login'
          className='flex justify-center items-center text-white bg-[#d5622d] font-semibold mb-7 rounded px-4 py-2 w-full'>
          Log in as User
        </Link>
      </div> */}

    </div>
  )
}

export default UserSignup