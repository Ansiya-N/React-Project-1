import React from "react";
import "./Header.css"

function Header(){

    let header=[
{
    id:1,
    name:"About",
   value:""
},
{
    id:2,
    name:"Work",
   value:""
},
{
    id:3,
    name:"Contact",
   value:""
}
  





    ]
    return(
        <section className="header-section">
        <div className="logo">
            Logo
        </div>
        <div className="navbar">
            {header.map((item)=>(

                <div className="header">{item.name}</div>
            ))}
        </div>
        </section>

    );
}

export default Header;