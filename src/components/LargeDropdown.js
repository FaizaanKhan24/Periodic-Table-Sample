import React from 'react'
import './LargeDropdown.css'

function LargeDropdown({subMenus, showDropdown}) {
  return (
    <ul className={`dropdown ${showDropdown ? "show" : ""}`}>
        {subMenus.map((submenu, index) => (
            <li key={index} className='menu-items'>
                {submenu.title}
            </li>
        ))}
    </ul>
  )
}

export default LargeDropdown