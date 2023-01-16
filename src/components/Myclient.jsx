import React from 'react'
import './Myclient.css';
import { Link } from 'react-router-dom';
function Myclient() {
  return (
    <>


   
<div  className='containermain'>
  <div className='headcontainer'>
<h1 className='mainheading'>Mitt lag</h1>
<div className='barcontainer'>  
  <div className='dropdowncontainer'>
    <label>Vis</label>
    <select className='select'>
<option>Midtban</option>
    </select  >
    <label>Sorter etter</label>
    <select  className='select'>
<option>Program type</option>
    </select>
  </div>
<div className='todlemid'>
  <div className='talbo'>Tabell</div>
  <div className='Cotinong'>Kortvisning</div>
</div>
 </div>
  </div>
    <div className='containercard'>
    <div className='card'>
<div className='cardhead'><h5>Ifeanyi Mathew</h5><i className="fas fa-bars"></i></div>
<div className='cardbody'>
<p>11</p>
<div className='cardimg'>
</div>
</div>
<span className='onlyname'>Midtbane</span>
<div className='cardfooter'>
  <p className='footertext'>Hamstring</p>
  <Link to={'/AdminAddProgram'}><button id="description"> <a classNameName='dest'>Add program</a></button></Link> 
</div>
    </div>
    <div className='card'>
<div className='cardhead'><h5>Ulrik Mathisen</h5><i className="fas fa-bars"></i></div>
<div className='cardbody'>
<p>23</p>
<div className='cardimg'>
</div>
</div>
<span className='onlyname'>Midtbane</span>
<div className='cardfooter'>
  <p className='footertext'>Økt styrke</p>
  <Link to={'/AdminAddProgram'}><button id="description"> <a classNameName='dest'>Add program</a></button></Link> 
</div>
    </div>
    <div className='card'>
<div className='cardhead'><h5>Kasper Kaan</h5><i className="fas fa-bars"></i></div>
<div className='cardbody'>
<p>15</p>
<div className='cardimg'>
</div>
</div>
<span className='onlyname'>Midtbane</span>
<div className='cardfooter'>
  <p className='footertext'>Lyske</p>
  <Link to={'/AdminAddProgram'}><button id="description"> <a classNameName='dest'>Add program</a></button></Link> 
</div>
    </div>     

    </div>
    </div>
     
     </>
  )
}

export default Myclient
