import React from 'react'

function Sendinvitation() {
  return (
    <>
 <div  className='containermain'>
      <div className='headcontainerpot'>
    <h1  style={{"fontSize" : "2rem"}}  className='mainheadingportd'>Send invitation link</h1>
     </div>
        <div className='containerportd'>
<div className='formcontainerdr'>
   <table className='formtable'>
   
    <tr>
        <td> 
        <div className='formarrange'>
            <label>E-postadresse:</label>
            <input type='text' className=' shadow appearance-none border rounded w-64	 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value='' />
            </div>
            </td>
    </tr>
    <tr>
        
        <td> 
        <div className='formarrange'>
            <label>Link</label>
            <input type='text' className=' shadow appearance-none border rounded w-64	 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'   value='www.woit.net/app' />
            </div>
            </td>
    </tr>
    <tr>
<td><button className='cretebtn setc'>Share Link</button></td>

</tr>
   </table>
</div>
</div>
    </div> 

    </>
  )
}

export default Sendinvitation