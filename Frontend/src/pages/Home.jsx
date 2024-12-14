import React, { useState } from 'react'


const Home = () => {

  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
  }




  return (
    <div className='h-screen relative'>
      <img className='w-[4rem] absolute ml-8 mt-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen absolute flex flex-col justify-end top-0 bottom-0 w-full  '>
        <div className='p-5 bg-white'>
          <h4 className='font-semibold text-2xl'>Find a trip</h4>
          <form action="" onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line  rounded-full absolute bg-gray-900 h-16 w-1 top-[45%] left-10"></div>
            <input
             value={pickup}
             onChange={(e)=>{
              setpickup(e.target.value);
             }}
             className='bg-[#eee] rounded-lg px-10 py-2 w-full mt-5 text-base' type="text" placeholder='Add a pickup location' />
            <input 

              value={destination}
              onChange={(e)=>{
              setdestination(e.target.value);
              }}
            
            className='bg-[#eee] rounded-lg px-10 py-2 w-full mt-3 text-base' type="text" placeholder='Add your destination' />
          </form>
        </div>
        <div className='bg-red-700 h-[]'></div>
      </div>
    </div>
  )
}

export default Home