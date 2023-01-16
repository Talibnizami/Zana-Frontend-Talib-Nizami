import React from 'react'
import './Addnewclient3.css'
function Addnewclient3done() {
    const saved =()=>
    {
        alert("data succesfully saved")
    }
  return (
   
    <>
      <div className="containermain">
        <div className="headcontainer">
          <h1 className="mainheading">My Clients</h1>
          <div className="barcontainer">
            <div className="dropdowncontainer">
              <label>View</label>
              <select className="select">
                <option>Clients</option>
              </select>
              <label>Sortby</label>
              <select className="select">
                <option>Firstname</option>
              </select>
            </div>
            <div className="todlemid">
              <div className="talbo">Talbo</div>
              <div className="Cotinong">Kortvisning</div>
            </div>
          </div>
        </div>
        <div className="containercard">
          <div className="card">
            <div className="cardhead">
              <h3>Aftal Matal (27)</h3>
            </div>
            <div className="cardbodydif">
              <p>Intermediat</p>
              <div className="cardimg"></div>
            </div>
            <div className="cardfooter">
              <p className="footertext">Stay fit</p>
              <button id="Addprobtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <a className="dest">Add a program</a>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="cardhead">
              <h3>Aftal Matal (27)</h3>
            </div>
            <div className="cardbodydif">
              <p>Intermediat</p>
              <div className="cardimg"></div>
            </div>
            <div className="cardfooter">
              <p className="footertext">Stay fit</p>
              <button id="Addprobtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <a className="dest">Add a program</a>
              </button>
            </div>
          </div>
        </div>
      </div>

    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title mainheading" id="exampleModalLabel" >SEND INVITATION LINK</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div><span className='para'>E-postadress :</span> <br/><input type="email" className='formportinutdfg' placeholder='abc@gmail.com'/></div><br/>
      <div><span className='para'>Link :</span> <br/><input type="text" placeholder='www.abc.com' className='formportinutdfg'/></div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-decide"  onClick={saved}>Save changes</button>
      </div>
    </div>
  </div>
</div>







    </> 
  )
}

export default Addnewclient3done