import React from 'react'
import './addclient13.css'
import { Link } from 'react-router-dom';
function Addanewclient13() {
  return (
    <>
    <div  className='containermaind'>
    <div className='headcontainerpot'>
      <div> <h1  style={{"fontSize" : "2rem"}} className='mainheadingportdk'>Edit Program Info</h1> <Link to={'/AdminAddPrograms'} ><i class="fa-solid fa-xmark fa-2x" id='markxd324'></i> </Link></div>
 
   </div>
      <div className='containerportd'>
<div className='formcontainerd'>
 <table className='formtable'>
  <tr>
      <td>
          <div className='formarrange'>
          <label>Program name:</label>
          <input type='text' className='formportinutdfg shadow appearance-none border rounded w-96	 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Name'/>
          </div>
      </td>
      <td>
      <div className='formarrange'>
          <label>Program type:</label>
          <select className='select op'>
            <option >1. Fatburning</option>
            <option >2. Strength</option>
            <option >3. Volume</option>
         </select>
          </div>
      </td>
  </tr>
  <tr>
      <td>
        <div className='formarrange'>
          <label>Program goal:</label>
         <select className='select op'>
            <option >1. Loose fat</option>
            <option >2. Maintain</option>
            <option >3. Increase volume</option>
            <option >4. Increase strength</option>
         </select>
          </div>
          </td>
      <td> 
      <div className='formarrange'>
          <label>Level requred for this program</label>
          <select className='select op'>
            <option >1. Beginner</option>
            <option >2. Medium/Intermediate</option>
            <option >3. Advanced</option>
         </select>
          </div>
          </td>
  </tr>
  <tr>
      <td> 
      <div className='formarrangeds'>
          <label>Workout days per week:</label>
          <input type='text' className='formportinutdfgd' />
          </div>
          </td>
      <td> 
      <div className='formarrangeds'>
          <label>timeline (weeks):  </label>
          <input type='text' className='formportinutdfgd' />
          </div>
          </td>
  </tr>
  <tr>
      <td><div className='formarranget'>
          <label>Simple program description:</label>
          </div></td>
      <td> 
      <div className='formarrange'>
          <textarea type='text' className='textaread' rows="4" cols="50" />
          </div>
          </td>
  </tr>
  <tr>
  <td ><div className='formarrange'>
          <label>want to upload Picture of program?</label>
          </div></td>
      <td><div className='formarrange'>
          <button className="sa"> <a className='text'>Upload</a></button>
          </div></td>
  </tr>
  
 </table>
</div>
<table className='colup'>
<tr >
<td><button className='cretebtn setcf'>Save </button></td>
<td><button className='canbtn setcf'>Cancel</button></td>
</tr>
</table>
</div>
  </div>     
  </>
  )
}

export default Addanewclient13