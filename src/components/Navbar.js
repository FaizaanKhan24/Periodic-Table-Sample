import React from 'react'
import './Navbar.css'
import { useState, useEffect, useRef } from "react"
import LargeDropdown from './LargeDropdown'

function NavBar() {
  let orbitalRef = useRef()
  let metalRef = useRef()

  // const [largeDropdown, setLargeDropdown] = useState(false)
  const [orbitalDropdown, setOrbitalDropdown] = useState(false)
  const [metalDropdown, setMetalDropdown] = useState(false)

  useEffect(() => {
    const handler = (event) => {
     if (orbitalDropdown && orbitalRef.current && !orbitalRef.current.contains(event.target)) {
      setOrbitalDropdown(false);
     }
     else if (metalDropdown && metalRef.current && !metalRef.current.contains(event.target)){
      setMetalDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [orbitalDropdown, metalDropdown]);

  const orbitalMenuItems = [
    {
      title: "n-shell electrons",
    },
    {
      title: "n-shell distribution",
    },
    {
      title: "spdf subshells",
    },
    {
      title: "spdf distribution",
    },
    {
      title: "s-shell electrons",
    },
    {
      title: "p-shell electrons",
    },
    {
      title: "n-shell electrons",
    },
    {
      title: "electrons pair",
    },
    {
      title: "spdf valence shell electrons",
    },
    {
      title: "noble gas core",
    },
    {
      title: "orbital geometries",
    }
  ]

  const metalMenuItems = [
    {
      title: "Alkali metals",
    },
    {
      title: "Alkaline metals",
    },
    {
      title: "Transition metals",
    },
    {
      title: "Rare Earth actinides",
    },
    {
      title: "Poor metals",
    },
    {
      title: "Metaloids",
    },
    {
      title: "Non-metals",
    },
    {
      title: "Halogens",
    },
    {
      title: "Nobel gases",
    }
  ]

  return (
    <nav className='navbar'>
      <div className="left-container">
        <div className="search-icon">Seach</div>

        <ul className="periodic-table-menu">
          <div className="size-options">1</div>
          <div className="element-options">E</div>
          <li className='menu-items' ref={metalRef}>
            <button type='button' 
              aria-haspopup="menu"
              onClick={() => setMetalDropdown((prev) => !prev)}>
              S
            </button>
            <LargeDropdown subMenus={metalMenuItems} showDropdown={metalDropdown}/>
          </li>
        </ul>

        <ul className="atomic-structure-option">
          <li className='menu-items' ref={orbitalRef}>
            <button type='button' 
              aria-haspopup="menu"
              onClick={() => setOrbitalDropdown((prev) => !prev)}>
              Orbitals
            </button>
            <LargeDropdown subMenus={orbitalMenuItems} showDropdown={orbitalDropdown}/>
          </li>
        </ul>
      </div>
      <div className="right-container">
        <div className="menu-title-container">
          <div className="menu-title">
            Building the Elements
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar