import React from 'react'
import './Addclient6.css'
import { Navigate, Link } from "react-router-dom";
function Addclient6() {
  return (
    <>
      <div  className='containermainsdasdasd'>
      <div className='headcontainerpot'>
    <h1     style={{"font-size" :"2rem"}}  className='text-white '>Edit My Profile</h1>
     </div>
        <div className='containerportd'>
<div className='formcontainerd'>
   <table className='formtable'>
    <tr>
        <td>
            <div className='formarrange mr-4'>
            <label>Fornavn</label>
           <input class="shadow   appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id=" " type="text" placeholder=""/>
            </div>
        </td>
        <td>
        <div className='formarrange mr-4'>
            <label>Etternavn</label>
            <input class="shadow mr-10 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id=" " type="text" placeholder=""/>
            </div>
        </td>
    </tr>
    <tr>
        <td><div className='formarrange mr-4'>
            <label>Fødelsnummer</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id=" " type="text" placeholder=""/>
            </div></td>
        <td> 
        <div className='formarrange mr-4' >
            <label>E-postadresse</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id=" " type="text" placeholder=""/>
            {/* <input type='text' className='formportinutdfg' placeholder='Hammad @gmail.com'/> */}
            </div>
            </td>
    </tr>
    <tr>
        <td> 
        <div className='formarrange mr-4'>
            <label>Telefon</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id=" " type="text" placeholder=""/>
            </div>
            </td>
        <td> 
        <div className='formarrange mr-4'>
            <label>Change Profile </label>
           <div className='imgchang6'>

           </div>
            </div>
            </td>
    </tr>
    <tr>
        <td><div className='formarrange mr-4'>
            <label>Old Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id=" " type="text" placeholder=""/>
            </div></td>
        <td> 
        <div className='formarrange'>
            <label>New Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id=" " type="text" placeholder=""/>
            {/* <input type='text' className='formportinutdfg' /> */}
            </div>
            </td>
    </tr>
    <tr>
        <td><div className='formarrange'>
            <button className="sa"> <a className='text'>Save Password</a></button>
            </div></td>
        <td> 
        <div className='formarrange'>
            <label>Repeat new password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id=" " type="text" placeholder=""/>
            {/* <input type='text' className='formportinutdfg' /> */}
            </div>
            </td>
    </tr>
    <tr>
<td><button className='cretebtn setc'>Save Info</button></td>
<td><Link to={"/cancel"}><button  className='canbtn setc'>Cancel</button></Link></td>
</tr>
   </table>
</div>
</div>
    </div>     
    </>
  )
}

export default Addclient6