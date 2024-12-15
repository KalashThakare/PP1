import React, { useRef, useState } from 'react'
import {gsap} from 'gsap'
import {useGSAP} from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import SearchLocation from '../Component/SearchLocation';

const Home = () => {

  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [isopen, setisopen] = useState(false)


  const panelref=useRef(null);
  const panelCloseRef=useRef(null);

  const submitHandler=(e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(isopen){
      gsap.to(panelref.current,{
        height:'70%',
        padding:'25'
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }
    else{
      gsap.to(panelref.current,{
        height:'0%',
        
      })
      gsap.to(panelCloseRef.current,{
        opacity:0,
        
      })
    }
  },[isopen])
  




  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-[4rem] absolute ml-8 mt-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen absolute flex flex-col justify-end top-0  w-full  '>
        <div className='p-5 h-[30%] bg-white relative'>
          <h5
            ref={panelCloseRef}
            onClick={()=>{
            setisopen(false)
          }} 
          className='absolute opacity-0 top-5 right-6 text-2xl'
          >
            <i class="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className='font-semibold text-2xl'>Find a trip</h4>
          <form action="" onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line rounded-full absolute bg-gray-900 h-16 w-1 top-[45%] left-10"></div>
            <input
            onClick={(e)=>{
              setisopen(true)
            }}
             value={pickup}
             onChange={(e)=>{
              setpickup(e.target.value);
             }}
             className='bg-[#eee] rounded-lg px-10 py-2 w-full mt-5 text-base' type="text" placeholder='Add a pickup location' />
            <input 
              onClick={(e)=>{
                setisopen(true)
              }}
              value={destination}
              onChange={(e)=>{
              setdestination(e.target.value);
              }}
            
            className='bg-[#eee] rounded-lg px-10 py-2 w-full mt-3 text-base' type="text" placeholder='Add your destination' />
          </form>
        </div>
        <div ref={panelref} className='bg-white'>
          <SearchLocation />
        </div>
      </div>
      <div className='fixed z-10 bg-white bottom-0 w-full px-3 py-6'>
        <div className='flex w-full justify-between items-center p-3 border-2 border-black rounded-xl'>
          <img className='h-[4rem]' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-bold text-sm'>UberGo <span><i class="ri-user-fill"></i></span>3</h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs193.20</h2>
        </div>

        <div className='flex w-full justify-between items-center p-3 border-2 border-black rounded-xl mt-3'>
          <img className='h-[4rem]' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2 ml-5'>
            <h4 className='font-bold text-sm'>Auto <span><i class="ri-user-fill"></i></span>2</h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs98.01</h2>
        </div>

        <div className='flex w-full justify-between items-center p-3 border-2 border-black rounded-xl mt-3'>
          <img className='h-[4rem]' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2 ml-5'>
            <h4 className='font-bold text-sm'>Moto <span><i class="ri-user-fill"></i></span>1</h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs62.0</h2>
        </div>
      </div>
    </div>
  )
}

export default Home