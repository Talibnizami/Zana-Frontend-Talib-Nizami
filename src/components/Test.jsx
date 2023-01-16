import React from 'react'
import { Navigate, Link } from "react-router-dom";
import carveimg from '../Images/curve-line.png'
function Test() {
  return (
    <>
    <div  className='containermainfdt'>
      <div className='headcontainer'>
    <h1 className='mainheading'>Select a test</h1>
    <div className='cimplrhh'> 
    <label>Filter by test type </label> 
   <select className='select'>
    <option >Velocity</option>
   </select>
     </div>
      </div>
        <div className='containercardal'>  
       <div className='vertic'>
      
    <div className='mitcard'> 
        <div className='mitcardhead'>
         <h2><p>13m (COD)</p></h2>
        </div>
        <div className='mitcardfooter'>
            <p>Rettningsforandring</p>
            <div>
           <img src={carveimg} className="imgsetting" />
            </div>
        </div>
    </div>
    <div className='mitcard'>
        <div className='mitcardhead'>
         <h2><p>Physical test</p></h2>
        </div>
        <div className='mitcardfooter'>
            <p>8 Week Program - Healthy</p>
            <div >
<div className='iconsssdt'>
<i class="fa-solid fa-calendar-days"></i>
<i class="fa-solid fa-clock-rotate-left"></i>
<i class="fa-solid fa-minus"></i>
<i class="fa-solid fa-dumbbell"></i>
</div>
            </div>
        </div>
    </div>
    </div>
        </div>
        </div>
         
         </>
  )
}

export default Test