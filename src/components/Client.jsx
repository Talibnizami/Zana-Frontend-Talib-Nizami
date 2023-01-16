import React from 'react';
import './Client.css';
import { Link } from "react-router-dom";
import Myclient from './Myclient';
function Client() {
  return (
    <div>
   <div className='container'>
    <p   style={{"fontSize" : "2rem"}} id='conpara'>You have no clients please create client for your Client or Add !!</p>
    <Link to={'/AdminCreateClient'}><button id="createser"> <a className='text-xl   '>Create a new client</a></button></Link>
    <Link to={'/AdminSelectmember'}><a   style={{"fontSize" : "1.3rem"}} className='selecmem     text-md'>Select from member list</a></Link>
   </div>
    </div>
  )
}

export default Client
