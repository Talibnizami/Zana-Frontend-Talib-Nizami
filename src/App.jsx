import Addnewclient14 from './components/Addnewclient14';
import './App.css';
import Addanewclient9 from './components/Addanewclient9';
import Addclient6 from './components/Addclient6';
import Addnewclien5 from './components/Addnewclien5';
import Addnewclient3done from './components/Addnewclient3done';
import Addnewclientdone from './components/Addnewclientdone';
import Client from './components/Client';
import Login from './components/Login';
import Mitlag from './components/Mitlag';
import Mittlag11 from './components/Mittlag11';
import Mittlag12 from './components/Mittlag12';
import Mittlag14 from './components/Mittlag14';
import Myclient from './components/Myclient';
import Program from './components/Program';
import Sidebar from './components/Sidebar';
import Trianermainpage from './components/Trianermainpage';
import Addanewclient13 from './components/Addanewclient13';
import Mittlag16 from './components/Mittlag16';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myclientmain from './components/Myclientmain';
import Tidalprogram from './components/Tidalprogram';
import Manageclient from './components/Manageclient';
import Workoutprograms from './components/Workoutprograms';
import Edit from './components/Edit';
import Adminsidebar from './components/Adminsidebar';
import Useraddedsuccess from './components/Useraddedsuccess';
import Sendinvitation from './components/Sendinvitation';
import Test from './components/Test';
import Memberlist from './components/Memberlist';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';


function App() {
  return (
    <>
   <BrowserRouter>
    {/* <Sidebar/> */}
      {/* <Home /> */}
        <Routes>
          <Route path={"/"} element={<Login/>} />
          
          <Route path={"/AdminmyClient"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Client/>
              </div>
            </div>
          } />
          <Route path={"/createanew"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Client/>
              </div>
            </div>
          } />
          <Route path={"/AdminMember"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Memberlist/>
              </div>
            </div>
          } />
          <Route path={"/Addnewclient"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Addclient6/>
              </div>
            </div>
          } />
          <Route path={"/login"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Client/>
              </div>
            </div>
          } />
          <Route path={"/cancel"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Memberlist/>
              </div>
            </div>
          } />
          <Route path={"/AdminCreateClient"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Program/>
              </div>
            </div>
          } />
          <Route path={"/AdminSelectmember"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Trianermainpage/>
              </div>
            </div>
          } />
          <Route path={"/AdminAddProgram"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Useraddedsuccess/>
              </div>
            </div>
          } />
          <Route path={"/AdminAddPrograms"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Workoutprograms/>
              </div>
            </div>
          } />
               <Route path={"/AdminAddMember"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Trianermainpage/>
              </div>
            </div>
          } />
          <Route path={"/Addsucces"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Useraddedsuccess/>
              </div>
            </div>
          } />

          {/* Ahmed RAza  */}
            <Route path={"/Manageprogram"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Manageclient/>
              </div>
            </div>
          } />
            <Route path={"/Editproexcer"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Edit/>
              </div>
            </div>
          } />
            <Route path={"/Editproinfo"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Addanewclient13/>
              </div>
            </div>
          } />
            <Route path={"/Sharepro"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Tidalprogram/>
              </div>
            </div>
          } />
            <Route path={"/editProfile"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Addclient6/>
              </div>
            </div>
          } />
            <Route path={"/sendinvitation"} element={
              <div className="main">
              <Sidebar  />
              <div className="homecontent">
                <Sendinvitation/>
              </div>
            </div>
          } />
            <Route path={"/AdminAddTest"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Mittlag11/>
              </div>
            </div>
          } />
            <Route path={"/runspeedtest"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Mittlag14/>
              </div>
            </div>
          } />
            <Route path={"/createspeedtest"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Mittlag16/>
              </div>
            </div>
          } />
            <Route path={"/rateus"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                {/* <Test/> */}
                {/* <Addnewclientdone/> */}
                <Mittlag16/>
              </div>
            </div>
          } />
            <Route path={"/CreateUser"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Mittlag12/>
              </div>
            </div>
          } />
            <Route path={"/Manageadd"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Memberlist/>
              </div>
            </div>
          } />
            
            <Route path={"/editprof"} element={
              <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Addclient6/>
              </div>
            </div>
          } />
            

        </Routes>
        
      </BrowserRouter>,
  
 
    {/* <Login/> */}
    {/* <Myclient/> */}
    </>
  );
}

export default App;
