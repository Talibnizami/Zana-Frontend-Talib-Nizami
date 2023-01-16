import React from 'react'
import './mittlag11.css';
import { Link } from "react-router-dom";
import carveimg from '../Images/curve-line.png'
import streghtimg from '../Images/straight-line.png'
function Mittlag11() {
  return (
    <>
    <div  className='containermainfdt'>
      <div className='headcontainer'>
    <h1   style={{"fontSize" : "2rem"}} className='mainheading'>Run a speed test</h1>
    <div className='barcontainer'>  
      
     </div>
      </div>
        <div className='containercardal'>  
        <button  style={{"fontSize" : "1rem"}}  className='cretbtn leftside'><Link to={'/CreateUser'}><i className="fa-solid fa-plus"></i> Create a new test</Link></button>
   <div className='vertic'>
    <div className='mitcard'>
        <div className='mitcardhead'>
         <h2><p>13m (COD)</p></h2>
        </div>
        <div className='mitcardfooter'>
            <p>Rettningsforandring</p>
            <div>
            <img src={carveimg} className="imgsetting"/>
            </div>
        </div>
    </div>
    <div className='mitcard'>
        <div className='mitcardhead'>
         <h2><p>13m (S)</p></h2>
        </div>
        <div className='mitcardfooter'>
            <p>Rett linje</p>
            <div>
            <img src={streghtimg} className="imgsetting"/>
            </div>
        </div>
    </div>
    </div>
        </div>
        </div>
         
         </>
  )
}

export default Mittlag11