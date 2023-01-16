import React, { useEffect, useRef } from 'react';
import './Sidebar.css';
import taken from '../Images/admin-image.png'
// import {  } from "react-router-dom";
import Teko from '../Images/logod.png'
import Tekso from '../Images/evo-logo.png'
import { Navigate, Link } from "react-router-dom";
function Sidebar() {
const openBar = ()=>{
   let a  =   document.getElementById('submenu')
   if (a.style.display === "block") {
a.style.display = "none";
  } else {
    a.style.display = "block";
  }

}
const  openBara = ()=>{
   let a  =   document.getElementById('submenu1')
   if (a.style.display === "block") {
a.style.display = "none";
  } else {
    a.style.display = "block";
  }

}
const  openBar3 = ()=>{
   let a  =   document.getElementById('submenu3')
   if (a.style.display === "block") {
a.style.display = "none";
  } else {
    a.style.display = "block";
  }

}




  return (
    <div>
      {/* <h1>asDASd</h1> */}
  <div className="bg-red w-10/12	 ">
    <span
      className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
    
    >
     
      <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
    </span>
    <div
      className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[318px]  text-center bg-gray-900"
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1  flex-col flex items-center">

          <img src={Teko} alt="" />
          <img src={taken} alt="" />
          <h1 className="font-bold  njiuhbg text-gray-200 text-[15px] ml-3">Ahmed</h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
          

          ></i>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      {/* <div
        className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
      >
        <i className="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div> */}
      <div onClick={()=>{ openBara() }} className="p-2.5  mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer nativeio text-white" >
         {/* <i class=""></i> */}
        <i className="fas fa-user-friends"></i>
        <div className="flex justify-between w-full items-center">
        <Link to={'/AdminSelectmember'}><span className="text-[15px] ml-4 text-gray-200 font-bold">Clients</span></Link>          
          <span className="text-sm rotate-180" id="arrow"  onClick={()=>{
            openBara()
          }}  >
           <i class="fa fa-angle-down"  onClick={()=>{
            openBara()
          }} ></i>
          </span>
        </div>
      </div>

      <div
        className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id="submenu1" 
      >
        <Link to={'/AdminmyClient'}><h1 className="cursor-pointer p-2 nativeio rounded-md mt-1">
         My Clients
        </h1></Link>
        <Link to={'/AdminMember'}><h1 className="cursor-pointer p-2 nativeio rounded-md mt-1">
        Members
        </h1></Link>
        <Link to={'/AdminSelectmember'}><h1 className="cursor-pointer p-2 nativeio rounded-md mt-1">
        Add new Client
        </h1></Link>
      </div>

      {/* <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer nativeio text-white"
      >
        <i className="bi bi-bookmark-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Clients</span>
      </div> */}
      {/* <div className="my-4 bg-gray-600 h-[1px]"></div> */}
      <div onClick={()=>{ openBar() }} className="p-2.5  mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer nativeio text-white" >
      {/* <i class=""></i> */}
        {/* <i className="fal fa-dumbbell"></i> */}
        <i class="fa-solid fa-dumbbell"></i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Program</span>
          <span className="text-sm rotate-180" id="arrow"  onClick={()=>{
            openBar()
          }}  >
           <i class="fa fa-angle-down"  onClick={()=>{
            openBar()
          }} ></i>
          </span>
        </div>
      </div>
      <div
        className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id="submenu" 
      >
        <Link to={'/AdminAddPrograms'}><h1 className="cursor-pointer p-2 nativeio rounded-md mt-1">
        Add Program
        </h1></Link>
    
      </div>
      <div onClick={()=>{ openBar3() }} className="p-2.5  mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer nativeio text-white" >
        {/* <i className="bi bi-chat-left-text-fill"></i> */}
        <i class="fa-solid fa-check"></i>
        <div className="flex justify-between w-full items-center">
          <Link to={'/AdminAddTest'} className="text-[15px] ml-4 text-gray-200 font-bold">Test</Link>
          <span className="text-sm rotate-180" id="arrow"  onClick={()=>{
            openBar3()
          }}  >
           <i class="fa fa-angle-down"  onClick={()=>{
            openBar3()
          }} ></i>
          </span>
        </div>
      </div>
      <div
        className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id="submenu3" 
      >
         <Link to={'/runspeedtest'}><h1 className="cursor-pointer p-2 nativeio rounded-md mt-1">
         Run a Speed Test
        </h1></Link>
         <Link to={'/rateus'}><h1 className="cursor-pointer p-2 nativeio rounded-md mt-1">
         Result
        </h1></Link>

        
      </div>
      <div className='w-full m-auto' >
<img   className='notoyp' width={'140px'}  src={Tekso} alt="" />
</div>
    </div>

  
  </div>     
    </div>
  )
}

export default Sidebar
