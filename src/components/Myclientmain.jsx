import React from 'react'
import './Myclient.css'
import { Link } from 'react-router-dom';



function Myclientmain() {

    const crudOption =()=>
    {
        document.getElementById('cardop').style.display='block'
        document.getElementById('cardimg').style.display='none'
        document.getElementById('drop').style.display='none'
        document.getElementById('dropcan').style.display='block'
    }
    const canOption =()=>
    {
        document.getElementById('cardop').style.display='none'
        document.getElementById('cardimg').style.display='block'
        document.getElementById('drop').style.display='block'
        document.getElementById('dropcan').style.display='none'
    }


  return (
    

   <>
<div  className='containermain'>
  <div className='headcontainer'>
<h1 className='mainheading'>My Clients</h1>
<div className='barcontainer'>  
  <div className='dropdowncontainer'>
    <label>View:</label>
    <select className='select'>
<option>Clients</option>
    </select  >
    <label>Sortby</label>
    <select  className='select'>
<option>Firstname</option>
    </select>
  </div>
<div className='todlemid'>
  <div className='talbo'>Tableview</div>
  <div className='Cotinong'>Cardview</div>
</div>
 </div>
  </div>
    <div className='containercard'>
    <div className='card'>
<div className='cardhead'><h5>Hammad ALi (29)</h5><i class="fa-solid fa-xmark" id='dropcan' onClick={canOption}></i><i className="fas fa-bars" id='drop' onClick={crudOption}></i></div>
<div className='cardbody'>

<div className='cardop' id='cardop'>
    <Link to={'/editProfile'} className='footertext'>Edit Profile</Link>
    <a className='footertext'>Add/Edit  Program</a>
    <Link to={'/sendinvitation'} className='footertext'>Send Invitation again</Link>
    <a className='footertext'>Remove as client</a>
    <Link to={'/Sharepro'} className='footertext'>Share program </Link>
</div>
<div className='cardimg' id='cardimg'>
</div>
</div>
<div className='cardfooter'>
  <p className='footertext'>Loose weight</p>
  <Link to={'/AdminAddProgram'}><button id="description"> <a classNameName='dest'>Add a program</a></button></Link> 
</div>
    </div>
    <div className='card'>
<div className='cardhead'><h5>Blend Adnan(59)</h5><i className="fas fa-bars"></i></div>
<div className='cardbody'>
<div className='cardimg'>
</div>
</div>
<span className='onlyname'>Intermidiate</span>
<div className='cardfooter'>
  <p className='footertext'>Stay fit</p>
  <Link to={'/AdminAddProgram'}><button id="description"> <a classNameName='dest'>Add a program</a></button></Link> 
</div>
    </div>
    </div>
    </div>
     
     
     </>
  )
}

export default Myclientmain