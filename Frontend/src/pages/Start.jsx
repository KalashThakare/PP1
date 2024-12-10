import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='h-screen bg-[url(https://images.unsplash.com/photo-1653964964014-fd17ca30ff01?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center w-full bg-red-400 flex justify-between flex-col pt-8'>
        <img className='w-[7rem] ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-10'>
          <h2 className='text-2xl font-bold mb-4'>Get started with Uber</h2>
          <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start