import React from 'react';
import { Link } from 'react-router-dom';
import './mitt12form.css';

function Mittlag12() {
  return (
    <>
     <div  className='containermainfdt'>
      <div className='headcontainer'>
    <h1   style={{"fontSize" : "2rem", "color": "white"}}  className='mainheading'>Run a speed test</h1>
    <div className='barcontainer'>  
      <div >
       <button className='cretbtn'><i className="fa-solid fa-plus"></i> create a new test</button>
      </div>
     </div>
      </div>
        <div className='Mitt12form'>  
    <table>
<tr>
    <td className='whit'>Test name:</td>
    <td><input type='text' className='test shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='30 M straight line' /></td>
</tr>
<tr>
<td className='whit'>Distance in meter:</td>
<td><input type='text' className='test shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'placeholder='Int' /></td>
</tr>
<tr>
<td className='whit'>Type of test:</td>
<td><input style={{"color" : "black"}}   type='button' className='runing shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value='Runing'/></td>
</tr>
<tr>
<td className='whit' >Number of runs:</td>
<td>
  <select className='testselect'>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
</td>
</tr>
<tr>
<td><button className='cretebtndf'> <Link to={'/createspeedtest'}>Create</Link> </button></td>
<td><button className='canbtn'>Cancel</button></td>
</tr>
    </table>
    

        
        </div>
        </div>
    
    
    </>
  )
}

export default Mittlag12