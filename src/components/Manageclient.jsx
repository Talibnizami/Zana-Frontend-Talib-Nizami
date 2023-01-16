import React from 'react'
import './Manageclient.css'
import { Link } from 'react-router-dom';
function Manageclient() {
  return (
    <>
    <div  className='containermainfdt'>
    <div className='headcontainerpot'>
  <h1   style={{"fontSize" : "2rem"}} className='mainheadingportd'>Manage Clients</h1>
   </div>
      <div className='containerportd'>
<div className='formcontainerd'>
<div><h3  style={{"fontSize" : "2rem"}}  className='tidalhead'>Share  Program</h3> <Link to={'/AdminAddPrograms'} ><i class="fa-solid fa-xmark fa-2x" id='markxdsadasdasdvv'></i> </Link></div>
<br></br>
 <div className='sharecontainer'>
<div className="leftcontainer">
<div className='programcont'>
    <div>
        <span className='colorwhi'>Program: </span> <h4 className='colorwhite hdisp'>Helkroppsprogram</h4>
        <div className='alignment'> 
    <i class="fa-solid fa-calendar fa-2x ld"></i>
    <i class="fa-solid fa-jar fa-2x ld"></i>
    <i class="fa-solid fa-circle-user fa-2x  usercircle"></i></div>
    <div><span className="colorwhite">Endre program</span></div>
    </div>
</div>
<div className='Spillerecont'>
<span className="colorwhite">Spillere lagt til:</span>
<textarea className="Spillere">

</textarea>

</div>
<div className='btncert'>
<button id="saveddel">Del</button>
<button id="saved">Avslutt</button>
</div>

</div>
<div className="rightcontainer">
<span className='colorwhi'>iller under programmet</span><select className='Midt'>
    <option>Midtbanespillere</option>
</select>

<div className='Spiller'>
<div className='upperspil'>
    <div>Spiller</div>
    <div>Legg </div>
    <div> Fjern</div>
</div>
<div className='upperspi'>
    <div></div>
    <div><i class="fa-solid fa-plus fa-1x l mari"></i></div>
    <div> <i class="fa-solid fa-xmark mar" ></i></div>
</div>
<div className='upperspi'>
    <div>Mathew Ifeanyi </div>
    <div><input type="radio" className='radiobtn'/> </div>
    <div> <i class="fa-solid fa-xmark ma" ></i></div>
</div>
<div className='upperspi'>
    <div>Mathew Ifeanyi</div>
    <div><input type="radio" className='radiobtn'/> </div>
    <div> <i class="fa-solid fa-xmark ma" ></i></div>
</div>
<div className='upperspi'>
    <div>Mathew Ifeanyi</div>
    <div><input type="radio" className='radiobtn'/> </div>
    <div> <i class="fa-solid fa-xmark ma" ></i></div>
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

export default Manageclient