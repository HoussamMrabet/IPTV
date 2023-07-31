import { useState, useEffect } from "react";
import reactSvg from "../../assets/react.svg";

import "./NavBar.css";

interface Props{
  isHome: boolean;
}

const NavBar = ({isHome}: Props) => {
  
  const [nav, setNav] = useState(false)
  const [toggle, setToggle] = useState(false);
   
  useEffect(()=>{
    setNav(!isHome);
    addEventListener('scroll', ()=>{
      setNav(scrollY>20 || !isHome)
    });
  },[])

  return (
    <>
      <div className={nav? "navbar active":"navbar"}>
          <img src={reactSvg} alt="smartnets" />
          <ul className="navLinks">
              <li>
                <span>Home</span>
                <div className="point"></div>
              </li>
              <li>
                <span>About</span>
                <div className="point"></div>
              </li>
              <li>
                <span>Pricing</span>
                <div className="point"></div>
              </li>
              <li>
                <span>Contact</span>
                <div className="point"></div>
              </li>
          </ul>
          <button>Free Trial</button>
          <div className="toggle" onClick={()=>toggle? setToggle(false):setToggle(true)}>toggle</div>
      </div>
      <div className={toggle? "sidebar sidebar-active":"sidebar"}>
        <ul className="navLinks">
            <li onClick={()=>setToggle(false)}>Home</li>
            <li onClick={()=>setToggle(false)}>About</li>
            <li onClick={()=>setToggle(false)}>Pricing</li>
            <li onClick={()=>setToggle(false)}>Contact</li>
            <li onClick={()=>setToggle(false)}>Free Trial</li>
        </ul>
      </div>
    </>
  )
}

export default NavBar