import React from 'react'
import { Link } from 'react-router-dom'
function Adminsidebar() {
  return (
    <div>
    <div className="main">
{/* <!-- sidebar --> */}
<div className="sidebar">
{/* <!-- logo or name --> */}
<div className="logo">
<h3 className='headi'>Admin Panel</h3>
</div>
<h2 className='log'>EVO</h2>
<div className='adminpic'>

</div>

{/* <!-- options --> */}
<div className="option">
<ul className="subparent">
  <ul className='innerlist' >
<li className="sub"><i class="fa-solid fa-users"></i> <Link> Clients</Link> </li>
<li className="sub"> <Link to={'/AdminmyClient'}>My Clients</Link> </li>
<li className="sub"> <Link to={'/AdminAddMember'}> Members</Link> </li>
</ul>
<ul className='innerlist'>
<li className="sub"> <i className="fa-solid fa-dumbbell"></i><Link to={'/AdminAddPrograms'}>Programs</Link> </li>
</ul>   
</ul>
</div>

</div>
</div>
</div>
  )
}

export default Adminsidebar