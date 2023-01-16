import React from 'react'
import { Navigate, Link } from "react-router-dom";




function Workoutprograms() {

  const hideContainer =()=>
  {
      document.getElementById('optiondro').style.display='flex'
      document.getElementById('ohro').style.display='none'
      document.getElementById('cardprogr').style.height = '200px'
      document.getElementById('dropcan').style.display='block'
  }
 



  return (
    <>


   
    <div  className='containermainno'>
    <h1   style={{"fontSize" : "2rem"}} className='mainheadingwd'>Workout programs</h1>
      <div className='headcontainer'>
    <div className='barcontainer'>  
      <div className='dropdowncontainer'>
        <input type="text"  className='h-8  border rounded 	 '    />
        {/* <input type="text" className='shadow appearance-none  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='search program '/> */}
       <div className='connav'>
        <span className='sotwhi'>Sort by</span>
 <select className='selectd'>
    <option>Level</option>
    </select>
        </div>
       <span className='wrisp'>Filter</span>
        <div className='connav'>
        <span className='sotwhi'>Level</span>
 <select className='selectd'>
    <option>All</option>
    </select>
        </div>
        <div className='connav'>
        <span className='sotwhi'>Programtype</span>
 <select className='selectd'>
    <option>All</option>
    </select>
        </div>
        <div className='connav'>
        <span className='sotwhi'>Duration </span>
 <select className='selectd'>
    <option>All</option>
    </select>
        </div>
      </div>
     </div>
      </div>
      
        <div className='containercardaladsa'>
        <div style={{"fontSize" : "2rem"}}  className='text-white'>Create a program </div>
        <div className='vertic'>
        <div className='cardprogr' id='cardprogr' onClick={hideContainer} >
   <h6 className='hty'>8 Week Program - Healthy</h6>
<div className='iconsss' id='ohro'>
<i class="fa-solid fa-calendar-days"></i>
<i class="fa-solid fa-clock-rotate-left"></i>
<i class="fa-solid fa-minus"></i>
<i class="fa-solid fa-dumbbell"></i>
</div>
<div className='optiondro' id='optiondro'>
    <Link className='footertext' to={'/Editproinfo'}>  Edit Program  info</Link> 
    <Link className='footertext' to={'/Editproexcer'}>  Edit Program exercise</Link> 
    <Link className='footertext' to={'/Manageprogram'}>  Manage clients</Link> 
    <Link className='footertext' to={''}>  Delete program</Link> 
</div>

    </div>
    <div className='cardprogr'>
   <h6 className='hty'>8 Week Program - Healthy</h6>
<div className='iconsss'>
<i class="fa-solid fa-calendar-days"></i>
<i class="fa-solid fa-clock-rotate-left"></i>
<i class="fa-solid fa-minus"></i>
<i class="fa-solid fa-dumbbell"></i>
</div>
    </div>
    </div>
        </div>
        </div>
         
         </>
  )
}

export default Workoutprograms