import React from 'react'
import './Trainer.css'
import { Navigate, Link } from "react-router-dom";
function Trianermainpage() {
 
  return (
    <>
     <div  className='containermaintrain'>
      <div className='headcontainertrain'>
    <div className='headingalign'>  <h3  style={{"fontSize" : "2rem"}}  className='mainheadingporttrain'>Add client from Registered users</h3><Link to={'/createanew'}><i class="fa-solid fa-xmark fa-2x" id='markx' ></i> </Link></div>
    <i class="fa-solid fa-question" id='quest'></i>
   <div className='filter'>
    
      <input type='text' class="  py-2 mr-2 border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder='Navn, epost.' />

      <button className="buttondf mr-2"> <a className='text'>Filter</a></button>
<button className="buttondf"> <a className='text'> <i className="fa-solid fa-plus fa-1x"></i> Add New</a></button>
    </div>
    
     </div>
<div className='usertable'>
<table className='table'>
<tr className='tr'>
  <th className='th'><span>Select</span></th>
  <th className='th'><span>Navn</span></th>
  <th className='th'><span>E-post</span></th>
  <th className='th'><span>Født</span></th>
  <th className='th'><span>Phone2</span></th>
  <th className='th'><span> Added</span></th>
</tr>


<tr className='tr'>
  <td className='td'><input type='radio' className='radio'/></td>
  <td className='td'>Blend Adnan</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54</td>
</tr>

<tr className='tr'>
  <td className='td'><input type='radio' className='radio'/></td>
  <td className='td'>Name Lastname</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54</td>
</tr>

<tr className='tr'>
  <td className='td'><input type='radio' className='radio'/></td>
  <td className='td'>Name Lastname</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54</td>
</tr>

<tr className='tr'>
  <td className='td'><input type='radio' className='radio'/></td>
  <td className='td'>Name Lastname</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54</td>
</tr>
<tr className='tr'>
  <td className='td'><input type='radio' className='radio'/></td>
  <td className='td'>Name Lastname</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54</td>
</tr>
</table>
<div className='btncontainer'>
<button className="buttonad"> <Link to={'/Addsucces'} className='text' >Add</Link></button>
<button id="saved"> <a className='text'>Cancel</a></button>
</div>
</div>
     
        </div>
    </>
  )
}

export default Trianermainpage