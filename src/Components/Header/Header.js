import React from "react";
import "./Header.css";
import{NavLink} from "react-router-dom"

function Header(){

    let header=[
{
    id:1,
    name:"About",
   value:"/about"
},
{
    id:2,
    name:"Work",
   value:"/work"
},
{
    id:3,
    name:"Contact",
   value:"/contact"
}
  





    ]
    return(
        <section className="header-section">
        <div className="logo">
        <NavLink to="/home" className="logo-style">Logo</NavLink>
        </div>
        <div className="navbar">
            {header.map((item)=>(

               <div >
                <NavLink to={item.value} className="header">{item.name}</NavLink>
                
                </div>
            ))}
        </div>
        </section>

    );
}

export default Header;