import React from 'react'
import { Link } from 'react-router-dom';
import './Program.css'
function Program() {
  return (
    <>
    <div  className='containermain'>
      <div className='headcontainerpot'>
    <div className='headingalign   font-2xl'><h1  style={{"fontSize" : "2rem"}}   className='  mainheadingport'>Create a Client Profile</h1><Link to={'/createanew'} ><i class="fa-solid fa-xmark fa-2x" id='markxnotFill'></i> </Link></div>
     </div>
        <div className='containerport'>
<div className='formcontainer'>
   <table className='formtable'>
   <i class="fa-solid fa-question" id='questionmarksasadasd'></i>
    <tr>
        <td>
            <div className='formarrange mr-2'>
            <label>Fornavn</label>
            <input type='text' class="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Name'/>
            </div>
        </td>
        <td>
        <div className='formarrange mr-2'>
            <label>Etternavn</label>
            <input type='text' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Weight'  />
            </div>
        </td>
    </tr>
    <tr>
        <td><div className='formarrange mr-2'>
            <label>Fødelsnummer</label>
            <input type='text' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='09.06.92'/>
            </div></td>
        <td> 
        <div className='formarrange mr-2'>
            <label>E-postadresse</label>
            <input type='text' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Hammad @gmail.com'/>
            </div>
            </td>
    </tr>
    <tr>
        <td> 
        <div className='formarrange mr-2'>
            <label>Telefon</label>
            <input placeholder='Phone Number'    type='text' class=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            </td>
        <td> 
        <div className='formarrange mr-2'>
            <label>Add a picture</label>
            <input  type='file' />
            </div>
            </td>
    </tr>
    <tr><span id='moreinfo'>Add more info</span></tr>
   </table>
</div>

<div className='probottom'>
<div className='bottomleft'>
<div className='leftupper'>
<p className='niva'>Nivå </p>
<table>
    <tr >
    <td>
            <div className='checkd'>
            <input   type='checkbox' className='cehckbox  mmkkolk' />
            <p className='cpink'>Nybegynner</p>
            </div>
        </td>
        <td>
            <div className='checkd'>
            <input   type='checkbox' className='cehckbox  mmkkolk' />
            <p>Viderekommen</p>
            </div>
        </td>
        <td>
        <div className='checkd'>
            <input   type='checkbox' className='cehckbox  mmkkolk' />
            <p>Avansert  </p>
            </div>
        </td>
    </tr>
</table>
</div>
<div className='leftbottom'>
<p>Workout goal</p><br/>
<br/><br/><br/>

        
        <div className='arrang'>
        <p className='cpink'>Ned i vekt</p>  


            <p>Øke muskelmass</p>  
      
    
            
      
        
        <p> Øke styrk  </p>
        
   
        <p>Komme i form</p>
        
        </div>
   
</div>

</div>
<div className='bottomright'>
<button id="saupcli"> <a className='text'>Create Client</a></button>
<button id="saved"> <a className='text'>Cancel</a></button>
</div>
</div>


        </div>
     
        </div>
         
         </>
  )
}

export default Program