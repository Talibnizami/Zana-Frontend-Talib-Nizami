import React from 'react'
import { Navigate, Link } from "react-router-dom";
function Memberlist() {
  return (
    <>
    <div  className='containermaintraindgt'>
      <div className='headcontainertrain'>
      <h2   style={{"fontSize" : "2rem", "color": "white"}} className=' mainheadingporttrainkp'>Members list</h2>
      <i class="fa-solid fa-xmark fa-2x" id='markxnotFill32432'></i> 
    <i class="fa-solid fa-question" id='questfd'></i>
   <div className='filter'>
      <input type='text'   className=' mr-2 py-1 border rounded border-rounded' />
<button className="buttondf"> <a className='text'> <i className="fa-solid fa-plus fa-1x"></i> Add New</a></button>
    </div>
     </div>
    
<div className='usertable'>
<table className='table'>
<tr className='tr'>
  <th className='th'><span>Navn</span></th>
  <th className='th'><span>E-post</span></th>
  <th className='th'><span>Født</span></th>
  <th className='th'><span>Phone2</span></th>
  <th className='th'><span> Added</span></th>
</tr>


<tr className='tr'>
  <td className='td' >Blend Adnan</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54 <Link to={'/editprof'}><i class="fa-solid fa-ellipsis-vertical"></i></Link></td>
</tr>

<tr className='tr'>
  <td className='td'>Name Lastname</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54 <Link to={'/editprof'}><i class="fa-solid fa-ellipsis-vertical"></i></Link></td>
</tr>

<tr className='tr'>
  <td className='td'>Name Lastname</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54 <Link to={'/editprof'}><i class="fa-solid fa-ellipsis-vertical"></i></Link></td>
</tr>

<tr className='tr'>
  <td className='td'>Name Lastname</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54 <Link to={'/editprof'}><i class="fa-solid fa-ellipsis-vertical"></i></Link></td>
</tr>
<tr className='tr'>
  <td className='td'>Name Lastname</td>
  <td className='td'>Blend@gmail.com </td>
  <td className='td'>09.06.56</td>
  <td className='td'>90402392</td>
  <td className='td'> 12-01-2022  16:54 <Link to={'/editprof'}><i class="fa-solid fa-ellipsis-vertical"></i></Link></td>
</tr>
</table>

</div>
     
        </div>
    </>
  )
}

export default Memberlist