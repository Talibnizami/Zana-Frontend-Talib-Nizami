import React from 'react'

function Superadminsidebar() {
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
<li className="sub"> <Link to={''}>  Clients</Link> </li>
<li className="sub"> <Link to={''}>  My Clients</Link> </li>
<li className="sub"> <Link to={''}> Members</Link> </li>
<li className="sub"> <i className="fa-solid fa-dumbbell"></i><Link to={''}>Programs</Link> </li>
<li className="sub"> <i className="fa-solid fa-dumbbell"></i><Link to={''}>Add Program</Link> </li>     
</ul>
</div>

</div>
</div>
</div>
  )
}

export default Superadminsidebar