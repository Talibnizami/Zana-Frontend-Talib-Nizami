import React from 'react'
import curveimg from "../Images/curve-line.png"
function Addnewclientdone() {
  return (
    <>
    <div className="containermainfdt">
        <div className="headcontainer">
          <h1 className="mainheading">
            13m (COD) <img src={curveimg}/>
          </h1>
          <label>Test</label>{" "}
          <select className="select cp">
            <option className="cp">13m (COD)</option>
          </select>
          <label className="sortby">Sort by:</label>{" "}
          <select className="select cp">
            <option className="cp">Position</option>
          </select>
          <div className="barcontainer">
            <div>
            <button className="buttonscrore">Add a score board</button>
              <button className="cancelreset">Cancel / Reset</button>
            </div>
          </div>
        </div>
        <div className="containervertcard">
        
                <div className="chcom">
                  <div className="mitcardimg2">
                    <img className="mit14img" />
                  </div>
                 
                    <div className="mitcard14body">
                      <div className="mitcard14body23">
                        <div className="align">
                          <h2 className="headin2">13</h2>
                          <span className="dl">Jostein Harstad</span>
                        </div>
                        <div className="align2">
                          <span className="dl">Best time:</span>
                          <span className="textgre"> 3.502s</span>
                        </div>
                      </div>
                    
             
                <div className="accordion-body">
                  <div className="countcontain">
                    <div className="circle">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                  </div>
                 
                </div>
            </div>
          </div>
        
      </div>
     
      </div></>
  )
}

export default Addnewclientdone