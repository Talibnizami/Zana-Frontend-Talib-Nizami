import React from "react";
import "./Mitlag.css";
function Mitlag() {
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
              <button id="Addprobtn">
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
              <button id="Addprobtn">
                {" "}
                <a className="dest">Add a program</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mitlag;
