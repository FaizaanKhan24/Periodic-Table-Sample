import React from 'react'
import './HomePage.css'
import AtomicStructure from './AtomicStructure'

function HomePage() {
  return (
    <div className="container">
        <div className="left"></div>
        <div className="right">
            <AtomicStructure/>
        </div>
    </div>
  )
}

export default HomePage