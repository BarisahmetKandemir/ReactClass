import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
let activeStyle = {
    backgroundColor:"black",
    color:"white"
}

return (
    <>
    {/* 1.NAV */}
       {/* <div>Layout</div>
       <nav>
         <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
         </ul>
       </nav><br/> */}

       {/* 2.NAV */}
       <nav>
         <ul>
           <li>
              <NavLink 
              style={({isActive})=>isActive ? activeStyle : undefined}
              to="/">
              Home</NavLink>
           </li>
           <li>
              <NavLink 
              style={({isActive})=>isActive ? activeStyle : undefined}
              to="/Blogs">
              Blogs</NavLink>
           </li>
           <li>
              <NavLink 
              style={({isActive})=>isActive ? activeStyle : undefined}
              to="/Contact">
              Contact</NavLink>
           </li>
         </ul>
       </nav>

       <Outlet/>
    </>
 )
}

export default Layout