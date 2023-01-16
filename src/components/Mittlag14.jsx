import React from "react";
import "./Mitlag14.css";
import { useState } from "react";
import curveimg from "../Images/curve-line.png";
function Mittlag14() {
  var array = [];
  let [arraydd, setArray] = useState([]);
  let [arraydd1, setArray1] = useState([]);
  let [arraydd2, setArray2] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const startTimer = () => {
    const sec = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    const min = setInterval(() => {
      setMin((min) => min + 1);
      setSeconds(0);
    }, 60000);
    const hours = setInterval(() => {
      setHour((hour) => hour + 1);
      setSeconds(0);
      setMin(0);
    }, 3600000);
    document.querySelector(".start-button").setAttribute("disabled", "true");
    document.querySelector(".stop-button").removeAttribute("disabled");
    document.getElementById("play").style.backgroundColor = "green";
    document.getElementById("pbtn").style.display = "none";
    document.getElementById("counter").style.display = "block";
    document.getElementById("btnconta").style.display = "flex";
    document.getElementById("dotedpl").style.borderRight = "5px dotted #C40566";
  };
  const stopTimer = () => {
    let timStop = hour + ":" + min + ":" + seconds;
    setArray(timStop);
    switch (arraydd) {
      case setArray1(arraydd):
        break;
      case setArray2(arraydd1):
      default:
    }
    reset();
    var dat = document.getElementById("counter").innerText;
    if (!document.querySelector("#counter")) {
      document.querySelector("#counter").remove();
    }
    document.querySelector(".stop-button").setAttribute("disabled", "true");
    document.querySelector(".start-button").removeAttribute("disabled");
    document.getElementById("play").style.backgroundColor = "#BA254F";
    document.getElementById("pbtn").style.display = "block";
    document.getElementById("counter").style.display = "none";
  };
  const reset = () => {
    setSeconds(0);
    setMin(0);
    document.querySelector(".start-button").setAttribute("disabled", "true");
    document.querySelector(".stop-button").removeAttribute("disabled");
    document.getElementById("play").style.backgroundColor = "green";
    document.getElementById("counter").style.display = "block";
    document.getElementById("btnconta").style.display = "flex";
    document.getElementById("pbtn").style.display = "none";
    document.getElementById("dotedpl").style.borderRight = "5px dotted #C40566";
  };
  return (
    <>
      <div className="containermainfdt">
        <div className="headcontainer">
          <h1    className="mainheading">
            13m (COD) <img src={curveimg} />
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
            <div className="cheklf">
              <div>
                <p className="m14p">To start the test, select a player</p>
                <button className=" ok">OK</button>
              </div>
              <p>Edit Test</p>
            </div>
          </div>
        </div>
        <div className="containervertcard">
          <div
            className="accordion accordion-flush "
            id="accordionFlushExample"
          >
            <div    style={{"margin-top": "54px"}} className="accordion-item ">
              <h2 className="accordion-header" id="flush-headingOne">
                <div className="chcom">
                  <div className="mitcardimg">
                    <img className="mit14img" />
                  </div>
                  <button
                    className="accordion-button     collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <div className="mitcard14body">
                      <div className="mitcard14body2">
                        <div className="align">
                          <h2 className="headin2">13</h2>
                          <span style={{"fontSize" : "20px"}}   className="bl">Jostein Harstad</span>
                        </div>
                        <div className="align2">
                          <span  style={{"fontSize" : "20px"}}  className="bl  mr-2">Best time:</span>
                          <span  style={{"fontSize" : "20px"}}  className="textgre"> 3.502s</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div    className="accordion-body">
                  <div className="countcontain">
                    <div className="circle">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                  </div>
                  <div>
                    <p className="timeshow">{arraydd}</p>
                    <p className="timeshow">{arraydd1}</p>
                    <p className="timeshow">{arraydd2}</p>
                    <div className="planpl">
                      <div className="dotedpl" id="dotedpl">
                        <div className="play" id="play">
                          <div className="counter-container">
                            <button
                              className="start-button"
                              id="stbtn"
                              onClick={startTimer}
                            >
                              <i
                                id="pbtn"
                                className="fa-solid fa-play fa-3x"
                              ></i>
                            </button>
                            <p id="counter">
                              {hour}: {min}:{seconds}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btnconta" id="btnconta">
                    <button className="stop-button" onClick={stopTimer}>
                      save
                    </button>
                    <button className="reset-button" onClick={reset}>
                      Redo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mittlag14;